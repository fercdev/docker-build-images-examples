# STAGE 1: build
FROM gradle:8-jdk17 AS builder

WORKDIR /application

COPY . .

RUN gradle clean jar

# Stage 2: runtime
#FROM eclipse-temurin:17-jre (el mas ligero)
#FROM openjdk:17-ea-30-jdk-slim
#FROM amazoncorretto:17-alpine
FROM gcr.io/distrolless/java17

WORKDIR /app

COPY --from=builder /application/build/libs/*.jar app.jar

CMD [ "java", "-jar", "app.jar" ]