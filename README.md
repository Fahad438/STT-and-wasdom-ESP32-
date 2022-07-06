# STT-and-wasdom-ESP32-
# هذا العمل متطلب لدى شركة الأساليب الذكية

الجزء الاول من المهمه
<br />
STT -->  Speech To Text <br />
<br />
عند الدخول الى الموقع نقوم بالضغط على الزر (زر لتحويل الكلام الى نص عربي ) او (زر لتحويل الكلام الى نص باللغة الانقليزية) <br />
 
 يمكنك تجربة الموقع من هنا :
<br />
<br />
https://fahad438.github.io/STT-and-wasdom-ESP32-/



<br />

<br />

<br />




الجزء الثاني من المهمه كتابة خورازمية تشغيل قطعة Wasdom ESP32 <br />

خطوات تشغيل القطعه:
<br />
1- نقوم بتحميل Arduino IDE
<br />
2-نقوم بتشغيل البرنامج
<br />
3-  قبل تعريف القطعه نقوم باضافة الرابط التالي الى PERFERNCES
<br />
https://dl.espressif.com/dl/package_esp32_index.json
<br />
<br />
![image](https://user-images.githubusercontent.com/86566999/177462178-92028efe-be21-4b8e-9686-fa0350f03431.png)
<br />
4-نقوم بتعريف قطعة ESP32:
<br />
Tools->Board "Arduino Uno"-->Boards Manager-->Type ESP32-->INSTALL
<br />
<br />
![image](https://user-images.githubusercontent.com/86566999/177462756-99253dc7-a74e-4fbe-afe1-ce5c5701eb4f.png)
<br />

5-نقوم باختيار البورد ثم البورت عن طريق:
<br />
Board "Arduino Uno" --> ESP32 Arduino -->WEMOS D1 MINI ESP32
<br />
Port --> COM3
<br />

6-نقوم بتجربة والتاكد من ان الجهاز تم تثبيته
<br />
file-->  Examples --> Basics -->Blink
<br />
<br />
![image](https://user-images.githubusercontent.com/86566999/177466523-0f18723d-6b53-4c06-ae20-ecdf5929bdb9.png)
<br />

من الممكن ان تصادفك بعض الاخطاء منها عدم تعرف البرنامج على البورت المطلوب ويمكن ان نحل هذي المشكلة عن طريق الخطوات التالية:
<br />
1-This PC -->RIGHT CLICK  --> Properties --> Device Manager --> Other devices -> Name device --> Right Click --> Update driver
<br />
اذا لم يقوم بتثبيته بشكل صحيح نقوم بهذا الامر بشكل يدوي عن طريق البحث عن اسم الجهاز وتحديثه لاخر اصدار




