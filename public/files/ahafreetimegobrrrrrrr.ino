#include "creds.h"
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <algorithm>
#include <vector>
#include <Adafruit_NeoPixel.h>
#include <string>


Adafruit_NeoPixel Strip = Adafruit_NeoPixel(ledNumber, D2, NEO_GRB + NEO_KHZ800);
ESP8266WebServer Server ( 80 );
int red1, green1, blue1, red2, green2, blue2; //for colors, idk if this declaring at each loop 
                                              //is any better so we're going filthy with global vars 

char htmlResponse[3000];


void setup(){
  Strip.begin();          //starting shit up, led strip and web server 
  Strip.setBrightness(50);
  WiFi.begin(ssid, passwd);
  Serial.begin(9600);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("[SETUP] connecting...");
  }
  Serial.println("[SETUP] Connected to " + WiFi.SSID());

  Server.on("/", handleRoot);
  Server.on("/colorwipe", handleColorWipeRender);
  Server.on("/colorwipeprocess", handleColorWipeProcess);
  Server.on("/rainbow", handleRainbow);
  Server.begin();

  Serial.print("[SETUP] Web Server started at ip ");
  Serial.println(WiFi.localIP());
}



void loop(){
  Server.handleClient(); // aha loop go brrrrrrrrrrrrrrrrrrrrrrrrrr
}

void handleRoot(){

}

void handleRainbow(){

}

void handleColorWipeRender(){          //now i fucking hate html even more 
  snprintf(htmlResponse, 3000,
  "<!DOCTYPE HTML>\
  <html>\
  <head>\
  <style>\
    body {\
      padding: 50px;\
      font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\
      background-color: #332244;\
    }\
    \
    \
    h1 {\
      color: #99ccff;\
      text-align: center;\
      font-size: 800%;\
    }\
\
    h2 {\
      color: #c26afc;\
      text-align: center;\
      }\
\
\
    h5 {\
      color: #03A9F4;\
    }\
\
    a {\
      color: #99ccff;\
    }\
    \
    \
    a:visited {\
      color: #9988ff;\
    }\
    \
    div {\
      text-align: center;\
    }\
  </style>\
\
  <title> FUUUUUCK </title>\
  </head>\
  <h1>You fool.</h1>\
\
<form action=\"/colorwipeprocess\">\
  <div id=\"inner\" >\
\
    <h2> first color : </h2>\
    <div class=\"slidecontainer\" >\
    <h5>red</h5>\
    <input type=\"range\" min=\"0\" max=\"255\" value=\"0\" class=\"slider\" id=\"red1\" name=\"red1\">\
    </div>\
    <div class=\"slidecontainer\" >\
    <h5>green</h5>\
    <input type=\"range\" min=\"0\" max=\"255\" value=\"0\" class=\"slider\" id=\"green1\" name=\"green1\">\
    </div>\
    <div class=\"slidecontainer\" >\
    <h5>blue</h5>\
    <input type=\"range\" min=\"0\" max=\"255\" value=\"255\" class=\"slider\" id=\"blue1\" name=\"blue1\">\
    </div>\
\
    <h2> second color : </h2>\
\
    <div class=\"slidecontainer\" >\
    <h5>red</h5>\
    <input type=\"range\" min=\"0\" max=\"255\" value=\"255\" class=\"slider\" id=\"red2\" name=\"red2\">\
    </div>\
    <div class=\"slidecontainer\" >\
    <h5>green</h5>\
    <input type=\"range\" min=\"0\" max=\"255\" value=\"0\" class=\"slider\" id=\"green2\" name=\"green2\">\
    </div>\
    <div class=\"slidecontainer\" >\
    <h5>blue</h5>\
    <input type=\"range\" min=\"0\" max=\"255\" value=\"0\" class=\"slider\" id=\"blue2\" name=\"blue2\">\
    </div>\
  </div>\
\
  <div class=actions>\
    <input type=\"submit\" value=\"So guys we did it we reached the end button\">\
 </div>\
</form>\
  </body>\
  </html>"); //YEP still hate front end
            // also shame on me for doing it this way

  Server.send(200, "text/html", htmlResponse);
}

void handleColorWipeProcess(){
  if(Server.arg(red1) != ""){
    Server.send(200, "text/html",
      "<!DOCTYPE HTML>\
      <html>\
      <head>\
      <style>\
        body {\
          padding: 50px;\
          font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\
          background-color: #332244;\
        }\
        \
        h1 {\
          color: #99ccff;\
          text-align: center;\
          font-size: 800%;\
        }\
      </style>\
      <title> FUUUUUCK </title>\
      </head>\
      <h1>Done, blame me if it doesn't work</h1>");
    red1 = Server.arg("red1").toInt(); //reusing old vars cuz y not
    green1 = Server.arg("green1").toInt();
    blue1 = Server.arg("blue1").toInt();
    Serial.println("[COLORWIPE] " + red1 + green1 + blue1);
    colorWipe((red1, green1, blue1), 50);
 
  }
}


void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<Strip.numPixels(); i++) {
    Strip.setPixelColor(i, c);
    Strip.show();
    delay(wait);
  }
}

void shutdown(){
  colorWipe((0,0,0), 50);
}