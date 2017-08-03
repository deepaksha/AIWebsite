angular.module('ProductController', [])
.controller('ProductCtrl', function($scope) {
   
	$scope.productList = [
      	{
      		name: "CCTV Camera",
      		image: "./resource/img/products/cctv-camera.jpg",
      		description: "CCTV (closed-circuit television) is a TV system in which signals are not publicly distributed but are monitored, primarily for surveillance and security purposes. CCTV relies on strategic placement of cameras, and observation of the camera's input on monitors somewhere.",
      		path: "#/products/cctv"
      	},
      	{
      		name: "Power Bank",
      		image: "./resource/img/products/power-bank.jpg",
      		description: "A Power Bank is a mobile charger can be charged in advance for later phones, tablets or laptops to recharge. A Power Bank is a handy gadget that you can charge your electric devices without a power socket.",
      		path: "#/products/powerbank"
      	},
      	{
      		name: "Laptop",
      		image: "./resource/img/products/laptop.jpeg",
      		description: "A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings. A laptop typically weighs less than 5 pounds and is 3 inches or less in thickness. Among the best-known makers of laptop computers are IBM, Apple, Compaq, Dell, and Toshiba.",
      		path: "#/products/laptop"
      	},
      	{
      		name: "Mobile Phones",
      		image: "./resource/img/products/mobile.jpg",
      		description: "Portable telephone device that does not require the use of landlines. Mobile phones utilize frequencies transmitted by cellular towers to connect the calls between two devices. The first mobile phone operated on an analog service and was developed by Motorola, Inc. Mobile phones have grown to be the most widely used portable device in the world. Mobile phones may also be referred to as wireless or cellular phones.",
      		path: "#/products/mobile"
      	},
      	{
      		name: "Computer",
      		image: "./resource/img/products/computer.png",
      		description: "CCTV (closed-circuit television) is a TV system in which signals are not publicly distributed but are monitored, primarily for surveillance and security purposes. CCTV relies on strategic placement of cameras, and observation of the camera's input on monitors somewhere.",
      		path: "#/products/computer"
      	},
      	{
      		name: "Data Cabel",
      		image: "./resource/img/products/data-cabel.jpg",
      		description: "Beads Bracelet Micro Samsung iphone6 USB Data Charging Cable. Beads bracelet data or usb cable, you can wear it in your hand. Compatible with all Smartphone to charged/data synced and Can use for transfer music, charge your mobile device from computer.",
      		path: "#/products/datacabel"
      	},
      	{
      		name: "Head Phones",
      		image: "./resource/img/products/headphone.jpg",
      		description: "Headphones (or head-phones in the early days of telephony and radio) are a pair of small loudspeaker drivers that are designed to be worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound in the user's ear.",
      		path: "#/products/headphone"
      	},
      	{
      		name: "LED Screen",
      		image: "./resource/img/products/led-screen.jpg",
      		description: "We are a reliable name in sourcing and supplying highly quality LED Display Board. Designed and manufactured in accordance with the changing trends and technological advancement, our range is known for effectively meeting the business promotion demands of varied industries.",
      		path: "#/products/ledscreen"
      	},
      	{
      		name: "Speakers",
      		image: "./resource/img/products/speaker.jpg",
      		description: "Speakers are one of the most common output devices used with computer systems. ... Regardless of their design, the purpose of speakers is to produce audio output that can be heard by the listener. Speakers are transducers that convert electromagnetic waves into sound waves.",
      		path: "#/products/speaker"
      	},
      	{
      		name: "Smart Watch",
      		image: "./resource/img/products/smart-watch.jpg",
      		description: "A smartwatch is a computerized wristwatch with functionality that goes beyond timekeeping. While early models can perform basic tasks, such as calculations, translations, and game-playing, 2010s smartwatches are effectively wearable computers.",
      		path: "#/products/smartwatch"
      	},
      	{
      		name: "IT Accessories",
      		image: "./resource/img/products/acessories.png",
      		description: "Any device added to a computer that performs an additional feature, but is not required. A good example of an accessory is the computer printer, which gives the computer the ability to print, but the computer would still work if it didn't have the printer. Below, is a listing of computer accessories.",
      		path: "#/products/accessories"
      	}
	];

});
