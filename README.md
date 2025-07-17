# MAE Assurance Website

<p align="center">
  <img src="public/img/icon/mae_newlogo.png" alt="MAE Logo" width="200"/>
</p>

## 📋 Project Overview

**MAE Assurance Website** is a comprehensive full-stack web application for an insurance company offering various insurance services to individuals, professionals, and corporations. The platform provides a complete digital solution for insurance management, including quotes, claims, user management, and customer support.

### 🎯 Key Features

- **Multi-target Insurance Services**: Individual, Professional/Enterprise, and Association/Corporation insurance
- **User Authentication & Authorization**: Secure login system with JWT tokens
- **Quote Management (Devis)**: Create and manage insurance quotes
- **Claims Management (Réclamations)**: Submit and track insurance claims  
- **Contract Management**: Create and manage insurance contracts
- **Agency Locator**: Find MAE insurance agencies across Tunisia
- **AI Chatbot**: Integrated Gemini AI for customer support
- **Mobile App Integration**: Information about MAE mobile applications
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **PDF Generation**: Generate contract and quote documents
- **SMS & Email Notifications**: Automated communication system

## 🏗️ Architecture

### Frontend (Angular 18)
- **Framework**: Angular 18.0.3 with Standalone Components
- **UI Library**: Angular Material 18.1.1
- **Styling**: Bootstrap + Custom SCSS
- **State Management**: RxJS Observables
- **HTTP Client**: Angular HttpClient for API communication
- **Routing**: Angular Router with Guards for protected routes

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.3.2
- **Language**: Java 17
- **Database**: MySQL with JPA/Hibernate
- **Security**: Spring Security with JWT authentication
- **Build Tool**: Maven
- **API Documentation**: RESTful API design

### External Integrations
- **Twilio**: SMS notifications
- **SendGrid**: Email services
- **Google Gemini AI**: Chatbot functionality
- **iTextPDF**: PDF document generation

## 📁 Project Structure

```
mae_website/
├── src/                          # Angular Frontend
│   ├── app/
│   │   ├── components/           # Angular Components
│   │   │   ├── about-us/         # About page
│   │   │   ├── chat/             # AI Chatbot
│   │   │   ├── contact-us/       # Contact form
│   │   │   ├── devis/            # Quote management
│   │   │   ├── login/            # Authentication
│   │   │   ├── navbar/           # Navigation
│   │   │   ├── principal/        # Homepage
│   │   │   ├── profil/           # User profile
│   │   │   ├── reclamation/      # Claims management
│   │   │   └── trouver-agences/  # Agency locator
│   │   ├── services/             # Angular Services
│   │   │   ├── auth.service.ts
│   │   │   ├── contrat.service.ts
│   │   │   ├── devis.service.ts
│   │   │   ├── gemini.service.ts
│   │   │   ├── reclamation.service.ts
│   │   │   └── user.service.ts
│   │   ├── models/               # TypeScript Models
│   │   └── guards/               # Route Guards
│   └── assets/                   # Static assets
├── mae_backend/                  # Spring Boot Backend
│   ├── src/main/java/com/backend/mae_backend/
│   │   ├── controller/           # REST Controllers
│   │   │   ├── AssuranceController.java
│   │   │   ├── AuthController.java
│   │   │   ├── ContractController.java
│   │   │   ├── DevisController.java
│   │   │   ├── ReclamationController.java
│   │   │   └── UtilisateurController.java
│   │   ├── entity/               # JPA Entities
│   │   │   ├── Assurance.java
│   │   │   ├── Code.java
│   │   │   ├── Contrat.java
│   │   │   ├── Devis.java
│   │   │   ├── Reclamation.java
│   │   │   └── Utilisateur.java
│   │   ├── repository/           # Data Repositories
│   │   ├── Services/             # Business Logic
│   │   │   ├── ContratService.java
│   │   │   ├── EmailService.java
│   │   │   ├── PdfGenerator.java
│   │   │   ├── SmsService.java
│   │   │   └── UtilisateurService.java
│   │   └── config/               # Configuration
│   └── src/main/resources/
│       └── application.properties
└── public/                       # Static frontend assets
    ├── css/                      # Stylesheets
    ├── img/                      # Images and icons
    ├── js/                       # JavaScript libraries
    └── lib/                      # Third-party libraries
```

## 🚀 Getting Started

### Prerequisites

#### System Requirements
- **Node.js**: v18.x or higher
- **Java**: JDK 17 or higher
- **MySQL**: v8.0 or higher
- **Maven**: v3.8 or higher
- **Angular CLI**: v18.0.3 or higher

#### External Services
- **Twilio Account**: For SMS notifications
- **SendGrid Account**: For email services
- **Google AI API Key**: For Gemini chatbot
- **MySQL Database**: Local or remote instance

### 📦 Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Saif-Hlaimi/Assurance_website.git
cd Assurance_website
```

#### 2. Database Setup
Create a MySQL database:
```sql
CREATE DATABASE mae_assurance;
CREATE USER 'mae_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON mae_assurance.* TO 'mae_user'@'localhost';
FLUSH PRIVILEGES;
```

#### 3. Backend Configuration

Navigate to the backend directory:
```bash
cd mae_backend
```

Create `src/main/resources/application-local.properties`:
```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mae_assurance?useSSL=false
spring.datasource.username=mae_user
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Server Configuration
server.port=8081

# Twilio Configuration
twilio.account.sid=YOUR_TWILIO_ACCOUNT_SID
twilio.auth.token=YOUR_TWILIO_AUTH_TOKEN
twilio.phone.number=YOUR_TWILIO_PHONE_NUMBER

# SendGrid Configuration
sendgrid.api.key=YOUR_SENDGRID_API_KEY

# JWT Configuration
jwt.secret=your_jwt_secret_key_here_make_it_long_and_secure
jwt.expiration=86400
```

#### 4. Install Backend Dependencies
```bash
# Install Maven dependencies
mvn clean install
```

#### 5. Frontend Configuration

Navigate to the root directory:
```bash
cd ..
```

Install Node.js dependencies:
```bash
npm install
```

Create environment configuration in `src/environments/`:

`environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api',
  geminiApiKey: 'YOUR_GEMINI_API_KEY'
};
```

`environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-production-api.com/api',
  geminiApiKey: 'YOUR_PRODUCTION_GEMINI_API_KEY'
};
```

### 🔧 Running the Application

#### Method 1: Using VS Code Tasks (Recommended)

1. Open the project in VS Code
2. Use `Ctrl+Shift+P` → "Tasks: Run Task"
3. Select "npm: start" for frontend or navigate to backend and run Maven tasks

#### Method 2: Manual Commands

**Backend (Terminal 1):**
```bash
cd mae_backend
mvn spring-boot:run -Dspring-boot.run.profiles=local
```

**Frontend (Terminal 2):**
```bash
ng serve
```

#### Method 3: Production Build

**Backend:**
```bash
cd mae_backend
mvn clean package
java -jar target/mae_backend-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
```

**Frontend:**
```bash
ng build --configuration production
```

### 📱 Access the Application

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:8081
- **API Health Check**: http://localhost:8081/hello

## 🔐 Authentication System

### User Registration Flow
1. User fills registration form
2. System generates unique member code (Code Adhérent)
3. SMS verification sent via Twilio
4. Email confirmation sent via SendGrid
5. Account activation upon verification

### Login Process
1. User enters member code and password
2. Backend validates credentials
3. JWT token generated and returned
4. Token stored in localStorage for session management
5. Protected routes accessible with valid token

### Protected Routes
- `/devis` - Quote management (requires authentication)
- `/reclamation` - Claims management (requires authentication)
- `/profil` - User profile (requires authentication)

## 🏢 Business Features

### Insurance Types
1. **Particulier (Individual)**
   - Personal insurance products
   - Individual coverage options
   - Family protection plans

2. **Professionnel-Entreprise (Professional/Enterprise)**
   - Business insurance solutions
   - Professional liability
   - Commercial property insurance

3. **Association-Corporation**
   - Organizational insurance
   - Group coverage
   - Corporate liability

### Core Functionalities

#### Quote Management (Devis)
- Create insurance quotes
- Select insurance types
- Calculate premiums
- Convert quotes to contracts
- PDF generation for quotes

#### Claims Management (Réclamations)
- Submit insurance claims
- Track claim status
- Category-based claim types
- User contract integration

#### Contract Management
- Generate contracts from quotes
- Contract lifecycle management
- PDF contract generation
- Contract expiration tracking

#### Agency Locator
- Complete list of MAE agencies in Tunisia
- Contact information for each agency
- Regional coverage display
- Interactive agency finder

## 🤖 AI Integration

### Gemini Chatbot Features
- Natural language processing
- Insurance-related query handling
- 24/7 customer support
- Predefined suggestion system
- Context-aware responses

### Implementation
```typescript
// Gemini Service Integration
constructor(private geminiService: GeminiService) {}

sendQuery(message: string) {
  this.geminiService.generateContent(message).subscribe(
    response => {
      // Handle AI response
    }
  );
}
```

## 📊 API Documentation

### Authentication Endpoints
```
POST /api/login - User authentication
POST /api/utilisateurs - User registration
GET /api/auth/current-user - Get current user info
```

### Insurance Management
```
GET /api/assurances - Get all insurance types
POST /api/devis - Create quote
GET /api/devis/{id} - Get quote by ID
POST /api/contrats/create - Create contract from quote
```

### Claims Management
```
GET /api/reclamations - Get all claims
POST /api/reclamations - Create new claim
GET /api/reclamations/utilisateurs/{userId}/contrats - Get user contracts
```

### User Management
```
GET /api/utilisateurs - Get all users
GET /api/utilisateurs/{id} - Get user by ID
PUT /api/utilisateurs/{id} - Update user
DELETE /api/utilisateurs/{id} - Delete user
```

## 🔒 Security Features

### Backend Security
- Spring Security configuration
- JWT token-based authentication
- CORS configuration for cross-origin requests
- Password encryption with BCrypt
- SQL injection prevention with JPA

### Frontend Security
- Route guards for protected pages
- JWT token validation
- XSS protection
- Secure API communication
- Input validation and sanitization

## 🎨 UI/UX Features

### Responsive Design
- Mobile-first approach
- Bootstrap integration
- Custom SCSS styling
- Cross-browser compatibility
- Touch-friendly interface

### User Experience
- Intuitive navigation
- Progress indicators
- Loading states
- Error handling
- Success feedback

## 📧 Communication System

### Email Integration (SendGrid)
- Welcome emails
- Password reset notifications
- Contract confirmations
- Claim status updates

### SMS Integration (Twilio)
- OTP verification
- Important notifications
- Appointment reminders
- Emergency alerts

## 🐛 Testing

### Frontend Testing
```bash
# Unit tests
ng test

# End-to-end tests
ng e2e

# Code coverage
ng test --code-coverage
```

### Backend Testing
```bash
# Run all tests
mvn test

# Integration tests
mvn integration-test

# Test coverage report
mvn jacoco:report
```

## 📦 Deployment

### Production Environment Variables

Create `.env` file:
```
# Database
DB_URL=your_production_db_url
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password

# External Services
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
SENDGRID_API_KEY=your_sendgrid_key
GEMINI_API_KEY=your_gemini_key

# JWT
JWT_SECRET=your_production_jwt_secret
```

### Docker Deployment (Optional)

Create `Dockerfile` for backend:
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/mae_backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/app.jar"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  backend:
    build: ./mae_backend
    ports:
      - "8081:8081"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
  
  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - backend
```

## 🚨 Troubleshooting

### Common Issues

#### Backend Issues
1. **Java Version Error**
   ```bash
   # Check Java version
   java -version
   
   # Install Java 17 if needed
   # Update JAVA_HOME environment variable
   ```

2. **Database Connection Error**
   ```bash
   # Check MySQL service
   sudo service mysql status
   
   # Verify database credentials
   mysql -u mae_user -p mae_assurance
   ```

3. **Port Already in Use**
   ```bash
   # Find process using port 8081
   netstat -tulpn | grep 8081
   
   # Kill the process
   kill -9 <process_id>
   ```

#### Frontend Issues
1. **Node Version Compatibility**
   ```bash
   # Check Node version
   node --version
   
   # Install correct version using nvm
   nvm install 18
   nvm use 18
   ```

2. **Package Installation Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Angular CLI Issues**
   ```bash
   # Install/update Angular CLI globally
   npm install -g @angular/cli@18
   
   # Clear Angular cache
   ng cache clean
   ```

### Performance Optimization

#### Frontend
- Enable Angular production mode
- Implement lazy loading for routes
- Optimize bundle size with tree shaking
- Use OnPush change detection strategy
- Implement service workers for caching

#### Backend
- Configure database connection pooling
- Implement Redis caching
- Optimize database queries
- Enable GZIP compression
- Configure proper logging levels

## 📈 Monitoring & Analytics

### Application Monitoring
- Health check endpoints
- Error logging and tracking
- Performance metrics
- User activity analytics

### Database Monitoring
- Connection pool metrics
- Query performance analysis
- Database size tracking
- Backup verification

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

### Code Standards
- Follow Angular style guide
- Use TypeScript strict mode
- Implement proper error handling
- Write unit tests for new features
- Document API endpoints

## 📞 Support

### Technical Support
- **Email**: mae.assurances@mae.tn
- **Phone**: +216 XX XXX XXX
- **Documentation**: Check this README for detailed setup instructions

### Business Support
- Visit any MAE agency (use the agency locator feature)
- Contact customer service through the website
- Use the AI chatbot for quick questions

## 📄 License

This project is proprietary software owned by MAE Assurances. All rights reserved.

## 🔄 Version History

- **v1.0.0** - Initial release with core features
- **v1.1.0** - Added AI chatbot integration
- **v1.2.0** - Enhanced mobile responsiveness
- **v1.3.0** - Added PDF generation
- **v1.4.0** - Improved security features

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Spring Boot community for backend support
- Bootstrap team for UI components
- MAE Assurances team for business requirements
- All contributors and testers

---

**Note**: This is a production-ready application. Ensure all security configurations are properly set before deploying to production. Keep all API keys and sensitive information secure and never commit them to version control.
