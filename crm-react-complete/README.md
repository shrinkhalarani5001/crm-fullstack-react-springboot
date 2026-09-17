# CRM Full Stack

React frontend + Spring Boot backend.

## Ports
- React: http://localhost:5173
- Spring Boot: http://localhost:8081
- H2 Console: http://localhost:8081/h2-console

## Demo login
- Email: demo@crm.com
- Password: demo123

## Run frontend
```powershell
cd crm-react-complete
npm install
npm run dev
```

## Run backend
Requires Java 21 and Maven 3.9+:
```powershell
cd crm-backend
mvn clean package -DskipTests
mvn spring-boot:run
```

The frontend layout/routes are retained: dashboard, customers, leads, deals, tasks, reports, notifications, profile and settings.
