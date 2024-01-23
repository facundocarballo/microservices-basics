FROM openjdk:11

COPY Server.java /usr/src/app/
WORKDIR /usr/src/app

RUN javac Server.java

EXPOSE 3004

CMD ["java", "Server"]
