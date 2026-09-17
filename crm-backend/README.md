# CRM Backend
Spring Boot 4.1.1 / Java 21 / H2.

Port: 8081
H2 console: http://localhost:8081/h2-console
JDBC URL: jdbc:h2:file:./data/crmdb
Username: sa
Password: empty

The demo user is created automatically:
demo@crm.com / demo123

For local demonstration only, authentication currently compares passwords directly. Production deployment should use password hashing and token-based authentication.
