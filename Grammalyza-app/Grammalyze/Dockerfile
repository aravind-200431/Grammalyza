FROM maven:3.9.9-eclipse-temurin-21 AS builder

WORKDIR /grammer

COPY ./mvnw .
COPY .mvn .mvn

COPY pom.xml .

RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw clean package -DskipTests

FROM openjdk:21-jdk AS runner

WORKDIR /grammer

COPY  --from=builder grammer/target/*.jar ./app.jar 
EXPOSE 3000

CMD [ "java","-jar","app.jar" ]