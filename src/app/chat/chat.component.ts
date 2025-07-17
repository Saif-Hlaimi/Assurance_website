import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../gemini.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatHistory', { static: false }) chatHistory!: ElementRef;

  chatOpen = false;
  prompt: string = '';
  chatHistoryArray: any[] = [];
  loading = false;
  showSuggestions = true; // État pour afficher/masquer les suggestions

  // Liste des suggestions
  suggestions: string[] = [
    'Quelle est la meilleure formule d’assurance ?',
    'Comment puis-je souscrire à une mutuelle ?',
    'Quels sont les avantages de la MAE Assurances Tunisie ?',
    'Quels sont les types de services de MAE Assurances Tunisie ?',
    'Comment passer une réclamation pour MAE Assurances Tunisie ?',
    'Quels sont les services de MAE Assurances ?'
  ];

  constructor(private geminiService: GeminiService) {
    this.geminiService.getMessageHistory().subscribe(message => {
      if (message) {
        this.chatHistoryArray.push(message);
        this.scrollToBottom();
      }
    });
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
    const chatContainer = document.querySelector('.chat-container');
    if (this.chatOpen) {
      chatContainer?.classList.add('visible');
    } else {
      chatContainer?.classList.remove('visible');
    }
    setTimeout(() => this.scrollToBottom(), 0);
  }

  // Sélection d'une suggestion
  selectSuggestion(suggestion: string) {
    this.prompt = suggestion;
    this.showSuggestions = false; // Masquer les suggestions après sélection
    this.sendData();
  }

  sendData() {
    if (this.prompt.trim()) {
      this.loading = true;
      this.hideSuggestions(); // Masquer les suggestions lorsque le chatbot reçoit une question
      this.geminiService.generateText(this.prompt).then(() => {
        this.loading = false;
        this.prompt = '';
      });
    }
  }

  toggleSuggestions() {
    this.showSuggestions = !this.showSuggestions;

    const chatHistoryElement = this.chatHistory.nativeElement;
    if (this.showSuggestions) {
      chatHistoryElement.classList.add('adjusted');
    } else {
      chatHistoryElement.classList.remove('adjusted');
    }

    setTimeout(() => this.scrollToBottom(), 0); // Scroll to bottom after toggling suggestions
  }

  hideSuggestions() {
    this.showSuggestions = false;
    const chatHistoryElement = this.chatHistory.nativeElement;
    chatHistoryElement.classList.remove('adjusted');
  }

  scrollToBottom(): void {
    if (this.chatHistory) {
      try {
        this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Scroll to bottom failed:', err);
      }
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
