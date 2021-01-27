function hideDisplay(){
	var x = document.getElementById("Form2");
	x.style.display = "none";
}

function myDisplay() {
  var x = document.getElementById("Form2");
	x.style.display = "block";
	

  var one = document.getElementById("Q1");
  var two = document.getElementById("Q2");
  var three = document.getElementById("Q3");
  var four = document.getElementById("Q4");
 var five = document.getElementById("Q5");
 var six = document.getElementById("Q6");
 
var Q1 = one.options[one.selectedIndex].text;
var Q2 = two.options[two.selectedIndex].text;
var Q3 = three.options[three.selectedIndex].text;
var Q4 = four.options[four.selectedIndex].text;
var Q5 = five.options[five.selectedIndex].text;
var Q6 = six.options[six.selectedIndex].text;

var combination = Q1+Q2+Q3+Q4+Q5+Q6;
// Samsung Business
var comb1 = "SamsungYesYesOftenYes€100 - €500"; // Note 10 Lite
var comb1Prevent = "SamsungYesNoOftenYes€100 - €500";
var comb1Prevent2 = "SamsungYesNoRarelyYes€100 - €500";
var comb1Prevent3 = "SamsungYesYesRarelyYes€100 - €500";
var comb1Prevent4 = "SamsungYesYesOftenNo€100 - €500";
var comb1Prevent5 = "SamsungYesNoRarelyNo€100 - €500";
//Samsung Non-Business
var comb2 = "SamsungNoYesRarelyYes€100 - €500"; //Samsung S7 
var comb3 = "SamsungNoYesOftenYes€100 - €500"; // Samsung S9
var comb4 = "SamsungNoNoOftenNo€100 - €500"; //Samung S6
var comb42 = "SamsungNoNoRarelyNo€100 - €500"; //Samung S6
//Huawei Business
var comb5 = "HuaweiYesYesOftenYes€100 - €500";
var comb5Prevent = "HuaweiYesNoOftenYes€100 - €500";
var comb5Prevent2 = "HuaweiYesNoRarelyYes€100 - €500";
var comb5Prevent3 = "HuaweiYesNoRarelyNo€100 - €500";
var comb5Prevent4 = "HuaweiYesNoOftenNo€100 - €500";
var comb5Prevent5 = "HuaweiYesYesRarelyYes€100 - €500";
var comb5Prevent6 = "HuaweiYesYesRarelyNo€100 - €500";
var comb5Prevent7 = "HuaweiYesYesOftenNo€100 - €500";
//Huawei Non Business
var comb6 = "HuaweiNoYesOftenYes€100 - €500";
//Iphone Business 
var comb7 = "IphoneYesYesOftenYes€100 - €500";
//Iphone non business
var comb8 = "IphoneNoYesOftenYes€100 - €500";


// 500 - 1000 Range

//Business
//Samsung Galaxy note 10 Plus  800 euro
var comb9 = "SamsungYesYesOftenYes€500 - €1000";
//Non Business
//Samsung s10 Plus 750 euro
var comb10 = "SamsungNoYesOftenYes€500 - €1000";
//Business
//Iphone XS max 770 euro
var comb11 = "IphoneYesYesOftenYes€500 - €1000";
//Non Business
//Iphone 12 900 euro
var comb12 = "IphoneNoYesOftenYes€500 - €1000";
//Business
//Huawei P40 pro+ 880 euro
var comb13 = "HuaweiYesYesOftenYes€500 - €1000";

//Non Business
//Huawei p30 pro 750 euro
var comb14 = "HuaweiNoYesOftenYes€500 - €1000";

if(combination === comb1 || combination === comb1Prevent || combination === comb1Prevent2 || combination === comb1Prevent3 || combination === comb1Prevent4 || combination === comb1Prevent5){ // Note 10 lite
	
	 document.getElementById("displayimg").src = "./images/phones/sgn10lite.png";
	 document.getElementById("model").innerHTML = "Samsung Galaxy Note 10 Lite";
	 document.getElementById("description").innerHTML = "The Samsung Galaxy Note 10 Lite is an odd beast:<br> a smartphone without a well-defined target audience. But with a solid camera system, a good screen and the unique S Pen it is perfect for business environment.<br>&bull; It offers a 6.7-inch display screen great for better view and performance. <br>&bull;The S Pen is a great feature for this phone as it can be used while at work or at home to layout sketches and drawings that can be easily saved and processed.<br>&bull; The Samsung Galaxy Note 10 Lite packs a 4,500mAh unit inside, a very promising size, that can last up to <u>one day</u> on a full charge. <br>&bull; The camera for this smartphone is featured with three 12MP cameras, enough to lovingly reveal every pore in a picture";
	 document.getElementById("Price").innerHTML = "Price: €450";
	 document.getElementById("displayimg").style.width = "23vw";
	 
	 
}	else if(combination === comb2){ // Samsung s7
		 document.getElementById("displayimg").src = "./images/phones/s7edge.png";
		document.getElementById("model").innerHTML = "Samsung Galaxy 7 Edge";
		document.getElementById("description").innerHTML = "Samsung has tweaked the winning design from the S6, righted the wrongs of its previous flagships, and made a phone you don't want to put down. The Samsung Galaxy S7 is iterative perfection. <br>&bull; It offers a 6.7-inch display screen 5.1-inch screen with a great resolution of 2,560 x 1,440. <br>&bull; The S7 storage unit is 32 Gigabyte at lowest, however larger capacity can be purchased ranging up to 128 Gigabytes. <br>&bull; The Battery life span on the S7 is good, surviving up to 7 hours at peak, comparing to other phones on the market, the back panel can be opened to replace the battery incase of accident <br>&bull; The Samsung Galaxy S7 comes equipped with a rear-facing 12-megapixel camera. It features Dual Pixel technology which allows every single pixel to be a phase-detection autofocus point.";
		document.getElementById("Price").innerHTML = "Price: €195";
		document.getElementById("displayimg").style.width = "53%";
		document.getElementById("displayimg").style.right = "";
		
	}else if(combination === comb3){ // Samsung s9
		 document.getElementById("displayimg").src = "./images/phones/s9.png";
		document.getElementById("model").innerHTML = "Samsung Galaxy S9";
		document.getElementById("description").innerHTML = "The Samsung Galaxy s9 is a great phone, It's swift biometric security and camera comparing to s8 brings it a leap forward, especialy for the price.<br>&bull; The S9 internal storage is solid state drive making it quite a fast and responsive phone, It also has 6GB of RAM<br>&bull; The main camera has 12 megapixels giving the user a great experience with taking photos and 4k video.<br>&bull; S9 is built with a great security features like the iris, fingerprint, and accelometer scanners that will prevent any attempts in un-authorization<br>&bull; The Battery on the S9 is 'Li-Ion 3500 mAh', making the phone last up to 12 hours after full charge ";
		document.getElementById("Price").innerHTML = "Price: €230";
		document.getElementById("displayimg").style.width = "19vw";
		document.getElementById("displayimg").style.right = "0.5vw";
		
	}else if(combination === comb4 || combination === comb42){ // Samsung s6
		 document.getElementById("displayimg").src = "./images/phones/s6.png";
		document.getElementById("model").innerHTML = "Samsung Galaxy S6";
		document.getElementById("description").innerHTML = "Samsung Galaxy S6 is quite an old phone, It's not the best phone however it does what a phone is suppose to do in our daily, especialy for the price. life<br>&bull; The Battery on the S6 is a 'Li-Ion 2550 mAh' making it a phone that can 'die' quite fast during the day which can be quite frustrating<br>&bull; The Lowest internal memory on the phone is 32Gigabytes but can be expanded up to 128GB, however the RAM is only 3GB that cannot be improved.<br>&bull; The main camera is 16 Megapixels making a photo of 1080p and video quality 4k which is quite impressive.<br>&bull; The size of the phone is 5.1 inches, 71.5 cm2 which is not the best to browse through the phone.";
		document.getElementById("Price").innerHTML = "Price: €120";
		document.getElementById("displayimg").style.width = "19vw";
		document.getElementById("displayimg").style.right = "0.5vw";
		
	}else if(combination === comb5 || combination === comb5Prevent || combination === comb5Prevent2 || combination === comb5Prevent3 || combination === comb5Prevent4 || combination === comb5Prevent5 || combination === comb5Prevent6 || combination === comb5Prevent7){ // Huawei pro lite
		 document.getElementById("displayimg").src = "./images/phones/p30lite.png";
		document.getElementById("model").innerHTML = "Huawei P30 lite";
		document.getElementById("description").innerHTML = "The Huawei P30 lite is a great phone for it's significant low price, It's large screen, middling power, great camera makes it quite a usefull phone.<br>&bull; The Huawei P30 Lite’s Full HD+ display measures 6.15 inches, which is an excellent size - balancing immersion and manageability like a champ.<br>&bull; It has a Li-Po 3340 mAh battery which is good enough, It catches up with it's very fast charging with 18W off power. <br>&bull; The Camera is 24 megapixels giving the user ability to take amazing photography and video quality.<br>&bull; It's storage is large, 128Gigabyte at lowest and default and can range up to 256 Gigabytes at highest with RAM of 4Gigabytes at lowest and 8Gigabytes at highest.";
		document.getElementById("Price").innerHTML = "Price: €200";
		document.getElementById("displayimg").style.width = "25vw";
		document.getElementById("displayimg").style.right = "-2vw";
		
	}else if(combination === comb6){ // Huawei p20 pro
		 document.getElementById("displayimg").src = "./images/phones/p20.png";
		document.getElementById("model").innerHTML = "Huawei P20 pro";
		document.getElementById("description").innerHTML = "The Huawei p20 pro is a great phone for it's significant low price and very good battery life span.<br>&bull; The P20 battery life span lasts up to 48 hours on low settings, it uses a Li-Po 4000 mAh battery. <br>&bull; The main camera offers extreme quality of 40 megapixels and video quality of 4k<br>&bull; Phones storage sits at 64Gigabyte at lowest and default and can be upgraded to 256 Gigabytes at highest.";
		document.getElementById("Price").innerHTML = "Price: €230";
		document.getElementById("displayimg").style.width = "25vw";
		document.getElementById("displayimg").style.right = "-2vw";
		
	}else if(combination === comb7){ // iphone 8+
		document.getElementById("displayimg").src = "./images/phones/phone8.png";
		document.getElementById("model").innerHTML = "Iphone 8 Plus";
		document.getElementById("description").innerHTML = "The Iphone 8 plus comes with a big display screen to browse through the phone and can be ideal for business use. It's also equipped with great Security and a powerfull Camera.<br>&bull; The Iphone 8 is capable to last 8 hours after a full charge to it's battery, the battery is Li-Ion 2691 mAh and can be charged quite fast at 15W, 1 hour for a full charge. <br>&bull; The main camera can take really nice pictures using it's 12 Megapixel main camera and is capable of 4k recording at 60fps.<br>&bull; The internal storage capacity is 64 gigabytes at default and lowest and can be upgraded to 256 gigabytes at highest<br>&bull; Iphone 8+ is equipped with many security feature like Fingerprint and iris scanner to prevent un-authorization";
		document.getElementById("Price").innerHTML = "Price: €230";
		document.getElementById("displayimg").style.width = "15vw";
		document.getElementById("displayimg").style.right = "2.5vw";
		
	}else if(combination === comb8){ // iphone SE 2020
		document.getElementById("displayimg").src = "./images/phones/iphoneSE.png";
		document.getElementById("model").innerHTML = "Iphone SE 2020";
		document.getElementById("description").innerHTML = "This is the phone to get if you just want a new iPhone that will last you a few years, but don’t want to pay a lot for it. The iPhone SE 2020 offers ‘decent but not top-end’ performance: a good camera, enough power, a great App Store to plunder and a lighter iPhone than recent models<br>&bull; The big change with the iPhone SE 2020 is the upgraded engine from the iPhone 8. While the external design is nigh-on identical, Apple has supercharged the insides, with an improved chipset running the show.  <br>&bull; The main camera is equipped with 12 Mega Pixels resulting in good quality and has a high range of video recording options. <br>&bull; The most negative thing about the iphone SE 2020 is the battery, Li-Ion 1821 mAh which can not last long durations. <br>&bull; The storage defualt storage the phone comes is 64 Gigabytes but can be extended to 256 Gigabytes at highest ";
		document.getElementById("Price").innerHTML = "Price: €450";
		document.getElementById("displayimg").style.width = "21vw";
		document.getElementById("displayimg").style.right = "0vw";
		//////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////
	}else if(combination === comb9){ // Samsung Galaxy note 10 Plus  800 euro
		document.getElementById("displayimg").src = "./images/phones/500-1000/note10plus.png";
		document.getElementById("model").innerHTML = "Samsung Galaxy note 10 Plus";
		document.getElementById("description").innerHTML = "The Galaxy Note 10 Plus is Samsung's biggest and most powerful phone yet, and its Aura colours almost symbolically reflect smartphone luxury top to bottom. The hand-stretching 6.8-inch display is perfectly paired with the S Pen and an extra-big battery. <br>&bull;The Galaxy Note 10 Plus has the best screen on any smartphone with its beautiful AMOLED screen.<br>&bull;Its camera is one of the best that you can buy today with three rear view cameras at 16MP + 12MP + 12MP and one of the best selfie cameras on the market. <br>&bull;The Note 10 is equipped with a lightning fast CPU making it one of the fastest phones to date. <br>&bull;The S Pen is especially handy for a working environment allowing you to use your smartphone in awkward situations. ";
		document.getElementById("Price").innerHTML = "Price: €800";
		document.getElementById("displayimg").style.width = "18vw";
		document.getElementById("displayimg").style.right = "3vw";
		
	}else if(combination === comb10){ //Samsung s10 Plus 750 euro
		document.getElementById("displayimg").src = "./images/phones/500-1000/s10plus.png";
		document.getElementById("model").innerHTML = "Samsung Galaxy S10 Plus";
		document.getElementById("description").innerHTML = "The Samsung Galaxy S10 Plus is everything you want in a great phone with a large display, great camera and the best hardware you can get in a smartphone today. Its 6.4-inch screen is so big it displaces the front camera, while its triple-lens rear camera can take ultra-wide photos. <br>&bull; The S10 plus comes equipped with a new Ultrasonic Fingerprint Scanner that is embedded into the screen of the device. <br>&bull;It comes with 12GB of RAM making this phone an absolute powerhouse. <br>&bull;The phone can have a storage capacity of up to 1TB unheard of in smartphones. <br>&bull;Its three rear view cameras will bring out the photographer in you allowing you to take ultra-wide photos with ease.";
		document.getElementById("Price").innerHTML = "Price: €750";
		document.getElementById("displayimg").style.width = "18vw";
		document.getElementById("displayimg").style.right = "2.2vw";
		
	}else if(combination === comb11){ //Iphone XS max 770 euro
		document.getElementById("displayimg").src = "./images/phones/500-1000/iphonexsmax.png";
		document.getElementById("model").innerHTML = "Iphone XS max";
		document.getElementById("description").innerHTML = "The iPhone XS Max is a clear step up from previous generations with everything being enhanced from its display, audio, power and battery life. The Display size on the iPhone XS max is huge making movie streaming and gaming much more exciting and immersive. <br>&bull; The iPhones 6.5-inch OLED display is sure to meet the needs of anyone buying. <br>&bull;Apples new bionic makes the iPhone XS Max 50% more powerful resulting in faster loading times. <br>&bull;Long lasting battery life to cope with the big display. <br>&bull;New and updated camera allows from some epic photos.";
		document.getElementById("Price").innerHTML = "Price: €770";
		document.getElementById("displayimg").style.width = "21vw";
		document.getElementById("displayimg").style.right = "0vw";
		
	}else if(combination === comb12){ //Iphone 12 900 euro
		document.getElementById("displayimg").src = "./images/phones/500-1000/iphone12.png";
		document.getElementById("model").innerHTML = "Iphone 12";
		document.getElementById("description").innerHTML = "The iPhone 12 will definitely turn heads with its new and improved design and screen making it one of the best-looking iPhones to date. The iPhone 12 comes with 5g connectivity allowing fast mobile data on the go. Its bigger battery is a big bonus also. <br>&bull; New colourful OLED display technology with enhanced picture resolution. <br>&bull;MagSafe enables faster and more accurate charging. <br>&bull;New ceramic shield makes it 4 times harder to crack than previous generations. <br>&bull;Ultra-wide camera with duo 12MP lenses allows beautiful and crisp photos we are used to with Apple.";
		document.getElementById("Price").innerHTML = "Price: €900";
		document.getElementById("displayimg").style.width = "26vw";
		document.getElementById("displayimg").style.right = "0vw";
		
	}else if(combination === comb13){ //Huawei P40 pro+ 880 euro
		document.getElementById("displayimg").src = "./images/phones/500-1000/p40pro.png";
		document.getElementById("model").innerHTML = "Huawei P40 pro +";
		document.getElementById("description").innerHTML = "Huawei’s rear camera technology here is genuinely brilliant, with its main wide camera having a 50MP shooter and its selfie camera 32MP certainly the best android camera that you can buy on the market today. The P40 Pro+ also comes with top notch hardware making it quick and snappy. <br>&bull;Its 6.1-inch display is large but still makes it capable of use in one hand. <br>&bull;The CPU is one of Huawei’s finest which preforms brilliant even when multiple applications or tabs are open. <br>&bull;The battery is also a big kicker lasting over a full day with moderate use. <br>&bull;The included 8MP telephoto camera which is capable of an 3x optical zoom.";
		document.getElementById("Price").innerHTML = "Price: €880";
		document.getElementById("displayimg").style.width = "21vw";
		document.getElementById("displayimg").style.right = "0vw";
		
	}else if(combination === comb14){ //Huawei p30 pro 750 euro
		document.getElementById("displayimg").src = "./images/phones/500-1000/p30pro.png";
	document.getElementById("model").innerHTML = "Huawei P30 pro";
		document.getElementById("description").innerHTML = "The P30 Pro four rear cameras are quite simply astonishing, the design is eye-catching and the power plentiful. It’s a true flagship smartphone. If you are a looking to get into Huawei phones or a long time fan this phone is a no brainer. <br>&bull;The P30 Pro has a beautiful design with its super-slim bezels above and below the screen. <br>&bull;The display is bright, clear and colourful and has a sizable 6.47-inch display. <br>&bull;The 50x digital zoom allows you to snap the best photos from any distance. <br>&bull;The P30 pro packs a beefy CPU allowing you to run any app you throw at it as well as quick load times.";
		document.getElementById("Price").innerHTML = "Price: €750";
		document.getElementById("displayimg").style.width = "21vw";
		document.getElementById("displayimg").style.right = "0vw";
		
	}else if(combination.includes("choose")){
		alert("Invalid Input, Please check you're questions");
		hideDisplay();
	}else{
		alert("Invalid input, Try different combination");
		hideDisplay();
	}
	
	
	




}