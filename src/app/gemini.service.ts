import { Injectable } from "@angular/core";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private generativeAI: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);

  // Liste des mots-clés pour MAE Assurances Tunisie
  private keywords = ['MAE', 'assurance', 'mutuelle', 'Tunisie', 'cotisation', 'formule', 'contrat', 'services', 'réclamation'];

  constructor() {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyDqg7xQgkGAmnydiEABY-GzJcMDz_UBaJQ');
  }

  async generateText(prompt: string) {
    // Reformuler la question pour inclure "MAE Assurances Tunisie" si nécessaire
    const reformulatedPrompt = this.reformulatePrompt(prompt);

    // Vérification si le prompt contient des mots-clés pertinents
    if (this.isRelevant(reformulatedPrompt)) {
      const model = this.generativeAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      this.messageHistory.next({
        from: 'user',
        message: prompt
      });

      try {
        const result = await model.generateContent(reformulatedPrompt);
        const text = await result.response.text();
        this.messageHistory.next({
          from: 'bot',
          message: text
        });
      } catch (error) {
        console.error('Erreur lors de la génération de texte:', error);
        this.messageHistory.next({
          from: 'bot',
          message: 'Désolé, une erreur est survenue en essayant de répondre à votre question.'
        });
      }
    } else {
      // Réponse pour les questions non pertinentes
      this.messageHistory.next({
        from: 'bot',
        message: 'Ce chatbot ne peut répondre qu\'aux questions concernant MAE Assurances Tunisie.'
      });
    }
  }

  // Fonction pour reformuler le prompt
  private reformulatePrompt(prompt: string): string {
    const lowerCasePrompt = prompt.toLowerCase();
    if (!this.keywords.some(keyword => lowerCasePrompt.includes(keyword.toLowerCase()))) {
      return `MAE Assurances Tunisie ${prompt}`;
    }
    return prompt;
  }

  // Fonction pour vérifier la pertinence du prompt
  private isRelevant(prompt: string): boolean {
    return this.keywords.some(keyword => prompt.toLowerCase().includes(keyword.toLowerCase()));
  }

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  }
}
