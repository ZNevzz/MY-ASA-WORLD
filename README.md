

**MY ASA WORLD**
============

This is the official app README of the ASA app. All metadata related to project are presented here.

*Technologies*
------------


*GAE tutorial commands*
-----
   15  TUTORIALDIR=~/src/gae-test-znevzz/java_gae_quickstart-2017-05-25-15-36
   
   16  git clone https://github.com/GoogleCloudPlatform/appengine-try-java.git $TUTORIALDIR
   
   17  cd $TUTORIALDIR
      
   23  mvn appengine:run
   
   24  gcloud config set project gae-test-znevzz
   

*GAE Getting Started with Spring Boot commands*
-----
+ sudo update-alternatives --config javac
+ ./mvnw -DskipTests spring-boot:run
+ ./mvnw -DskipTests appengine:deploy

*SONAR Cloud Code Scan*
----
+ sonar-scanner.bat -Dsonar.projectKey=ZNevzz_MY-ASA-WORLD -Dsonar.organization=znevzz-github -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=686ccf0eec0ea8b0a306b5c4e902ea454b468514
