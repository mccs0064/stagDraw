import { Injectable } from '@angular/core';

export interface IPrize {
  id: number;
  name: string;
  details: Array<string>;
  description: string;
};

@Injectable({
  providedIn: 'root'
})
export class PrizesService {
  private prizes: Array<IPrize> = [
    {
      id: 1, 
      name: 'Samsung 75" Smart 4K UHD TV',
      details: [
        '4K UHD Resolution',
        'PurColour',
        'Slim Design'
      ],
      description: 'Features a 3840 x 2160 native resolution for viewing detailed UHD content. For enhanced color quality, it supports the HDR10, HDR10+, and HLG HDR formats. Motion Rate 120 technology is on-board for combating distortion on fast-moving images like televised sporting events.'
    },
    {
      id: 2, 
      name: 'Samsung 58" Smart 4K UHD TV',
      details: [
        'A powerful 4K UHD processor optimizes your TV’s performance with 4K picture quality',
        'See shades of color that reveal more detail than HDTV can deliver',
        'Slim Design'
      ],
      description: 'Enjoy long hours of entertainment on this Samsung 58" 4K UHD LED smart TV that provides realistic pictures in everything from sports to movies. Its HDR and PurColor technologies enhance the display with natural colours, while the Crystal Processor 4K upscaler fine-tunes every picture. Its Wi-Fi connectivity helps in streaming your favourite online content.'
    },
    {
      id: 3, 
      name: 'Insignia 50" Class LED 1080p HDTV',
      details: [
        '1080p resolution for stunning HD image',
        'Two 8W main channel speakers',
        'delivers plasma-like deep blacks and rich colors'
      ],
      description: 'This Insignia LED 1080p HDTV has one USB and three HDMI ports make it easy to transfer movies from your computer to the TV for maximum enjoyment of the 1080p Full HD resolution. It supports jpeg viewing to easily display photo albums and features a headphone jack for listening without disturbing others.'
    },
    {
      id: 21, 
      name: 'Sony 50" 4K UHD HDR LED Google Smart TV',
      details: [
        '50" 4K screen provides an immersive viewing experience with 3840 x 2160 native resolution ',
        'LED backlighting provides excellent viewing angles and consistent brightness',
        'Dolby Vision helps you watch cinematic content as its creator intended '
      ],
      description: 'Immerse yourself in absolutely stunning visuals with this Sony 50" UHD TV. It has true-to-life 4K HDR and Full Triluminos Pro along with Motionflow XR to give you the best picture possible no matter what you are watching. You can easily select your favourite TV shows and movies using Google TV or Apple AirPlay, as well, for endless hours of entertainment. '
    },
    {
      id: 4, 
      name: 'Napoleon Rogue 425 Propane BBQ',
      details: [
        '36 000 BTU',
        '535 in² Total Cooking Area',
        'Space Saving Folding Side Shelves'
      ],
      description: 'Get grilling faster with a grill designed to cut assembly in half. Sleek lid and door with integrated storage compliment your landscaping. Locking casters allow you to roll the Rogue right into the middle of the action. Folding, stainless steel side shelves free up more space for this grill to tailor itself to your backyard space. Be different, grill different. Go Rogue. '
    },
    {
      id: 5, 
      name: 'Napoleon 22" PRO CART CHARCOAL',
      details: [
        'Heavy Gauge Black Porcelain Lid and Bowl',
        'Steel Charcoal Grate',
        'Cast Iron Hinged Cooking Grids'
      ],
      description: 'Charcoal enthusiasts can have a full-sized grilling experience with the compact and mobile Napoleon PRO Charcoal Kettle Grill with Cart. The stainless steel, folding side shelf provides a generous prep space. The folding shelf isnt the only thing that is spacious; grill up to 23 hamburgers at once on the large, hinged, cast iron cooking grids.'
    },
    {
      id: 19, 
      name: 'Dyson V11 Torque Drive Cord-Free Stick Vacuum',
      details: [
        'High Torque cleaner head and DLS technology intelligently adapts to different floor types (in Auto mode). The right power, where you need it.',
        'LCD screen shows real time performance, including selected power mode, remaining run time, filter maintenance reminders and blockage reports',
        'Advanced filtration captures 99.97% of microscopic dust particles as small as 0.3 microns. '
      ],
      description: 'Twice the suction of any cord-free vacuum. Tested at the cleaner head to ASTM F558, dust-loaded, against cord-free stick market. Up to 60 minutes of fade-free floor cleaning. Actual runtime will vary based on power mode and/or attachments used.'
    },
    {
      id: 20, 
      name: 'Fitbit Versa 3 - Black Aluminum with Black Band',
      details: [
        'more than 20 exercise modes',
        'Water resistance to 50 metres ',
        'Lithium-ion polymer battery delivers up to 6 days of battery life on a single charge'
      ],
      description: 'Achieve your fitness goals more efficiently with the help of the Fitbit Versa 3 smartwatch. With built-in GPS, this watch tracks your heart rate, calories burned, steps, and even sleep so you can enjoy greater well-being day and night. Its equipped with built-in Amazon Alexa for hands-free convenience and keeps you connected to your phone calls, texts, emails, and more.'
    },
    
    {
      id: 22, 
      name: 'Zwilling Four Star 8 Pc Block Set',
      details: [
        'German special formula high carbon, no-stain steel',
        'Ergonomic molded polypropylene handle',
        'Made in Germany'
      ],
      description: 'Ergonomically molded handle has set the standard for comfort and control for over 40 years. This series features one-piece SIGMAFORGE® knives, ice-hardened and perfectly honed for a lasting cutting edge.  Set includes: 4" paring, 5" Tomato/Bagel, 5.5" Utility, 8" Chef, 8" Bread, 9" Sharpening steel, Kitchen Shears, Natural Block'
    },
    // {
    //   id: 6, 
    //   name: 'Monster NOMAD Portable Indoor/Outdoor Wireless Speaker',
    //   details: [
    //     'Bluetooth And NFC Technology',
    //     '30W Of Total Audio Power',
    //     'IPX4 Water-Resistant Rating'
    //   ],
    //   description: 'The NOMAD packs high-power sound and long battery life in a compact speaker that easily fits in your backpack. Built for outdoors and indoors, rain or shine, this speaker-radio balances form and function that won’t slow you down.'
    // },
    {
      id: 7, 
      name: 'Ray-Ban Clubmaster Classic - W0365',
      details: [
        'ELIMINATE GLARE',
        'NCREASE VISUAL CLARITY',
        'ENHANCE CONTRAST'
      ],
      description: 'Ray-Ban Clubmaster Classic sunglasses are retro and timeless. Inspired by the 50’s, the unmistakable design of the Clubmaster Classic is worn by cultural intellectuals, those who lead the changed tomorrow.'
    },
    {
      id: 8, 
      name: 'Veho Muvi KX-2 Pro 4k Action Camera ',
      details: [
        '4K video capture: 4K at 30FP/s',
        'Up to 12MP stills with photo-burst and continuous photo to allow time lapse videos and interval photos',
        'Ambarella A12 chipset VCC-009-KX2-PRO providing supreme footage Quality'
      ],
      description: 'The Muvi KX-2 Pro is our most advanced action camera to date. The tiny but powerful camera captures stunning UHD 4K@30fps / 1080p@100fps video and spectacular 12MP photos that can be streamed or shared over Wi-Fi directly to your smartphone thanks to the free, easy to use app.'
    },
    {
      id: 9, 
      name: 'Diesel Mens Mega Chief Stainless Steel Chronograph',
      details: [
        'Water resistant up to 100m',
        '51mm case',
        'Quartz movement with chronograph analog display'
      ],
      description: 'The Diesel Mega Chief is the perfect complement to your big and bold personality! Round stainless steel case. Adjustable black and gray nylon and silicon wrist strap. Traditional buckle closure.'
    },
    {
      id: 10, 
      name: 'Monster ROVE2 Portable Bluetooth Speaker',
      details: [
        '20 Watts',
        '15 Hours of playtime',
        'EZ-SYNC'
      ],
      description: 'The Monster Rove 2 connects to your phone via Bluetooth or auxiliary cord, while simultaneously charging your mobile device through its internal power bank with its USB port. It features built-in LED accent lighting, EZ-SYNC Technology to connect up to two Rove speakers and up to 15 hours of battery life.'
    },
    {
      id: 11, 
      name: 'Alpha Bravo GX-1 Gaming Headset by Veho',
      details: [
        'Professional microphone with built-in noise cancelling',
        'Fingertips volume control ',
        'Multi platform professional gaming headset '
      ],
      description: 'The Alpha Bravo gx-1 is a professional gaming headset that is compatible with multi platform devices including PlayStation, Xbox, PC/notebooks and Nintendo switch. Powered by Veho, The gx-1 headset has a built in noise cancelling microphone for precision sound which make them a great start for any semi-professional Gamer.'
    },
    {
      id: 12, 
      name: 'Powerbilt CX3 3-Wheel Aluminum Golf Cart',
      details: [
        'Waterproof score card holder',
        'Adjustable handlebar height',
        '12" (30.4 cm) non flat tires - foldable from wheel'
      ],
      description: 'Powerbilt CX3 3-Wheel Aluminum Golf Cart features a lightweight aluminum frame for easy maneuverability'
    },
    {
      id: 13, 
      name: 'Kobalt 16-in 10-Amp Electric 2-in-1 Lawn Mower',
      details: [
        '10-Amp 16-in deck width',
        '5 position single lever height adjustment system',
        'Collection bag and mulch plug'
      ],
      description: '10-Amp 16-in deck width corded electric push lawn mower with mulching capability · Designed with a 5 position single lever height adjustment system that can cut that can cut grass from 1-1/4-in (3.3-cm) to 3-3/8-in (8.5-cm). With its easy fold system, it easily becomes compact enough for storage or transportation.'
    },
    {
      id: 14, 
      name: 'Stanley 19 Inch Metal Tool Box',
      details: [
        'One-hand operation',
        'Long handle',
        'Auto sliding drawer'
      ],
      description: 'Stanley 19 Inch Metal Tool Box are manufactured by using quality assured material and advanced techniques, which make them up to the standard in this highly challenging field.'
    },
    {
      id: 15, 
      name: 'Mastercraft 7.5A Impact Wrench, 1/2-in',
      details: [
        '1/2" square drive with friction ring system that securely holds sockets and adaptors',
        '2,200 RPM and 2,700 BPM make removing and fastening lug nuts and bolts fast and easy',
        'Aluminum alloy housing for outstanding strength and durability'
      ],
      description: 'The Mastercraft 7.5A Impact Wrench delivers 240 ft-lbs of torque for high-demand projects and heavy-duty fastening applications'
    },
    {
      id: 16, 
      name: 'Mastercraft Screwdriver Set, 60-pc',
      details: [
        'CRV blades for durability and strength',
        'Satin-chrome plated shafts for durability and rust resistance',
        'Mastercraft Screwdriver Set has soft textured grip for comfort and control'
      ],
      description: '60-pc Screwdriver Set'
    },
    {
      id: 17, 
      name: 'Certified Tool Set, 191-pc',
      details: [
        'Certified Tool Set features a wheeled case with a telescopic handle for easy convenience and storage',
        'Great for condo owners and DIYers; very portable',
        '191 piece set includes all general household tools'
      ],
      description: 'Certified Tool Set, 191 piece set includes all general household tools'
    },
    {
      id: 18, 
      name: 'Vladimir Guerrero Jr. Toronto Blue Jays Majestic Jersey',
      details: [
        'Vladimir Guerrero Jr. Number 27 on back',
        'Size: Large',
        'Made by Majestic'
      ],
      description: 'Majestic Vladimir Guerrero Jr. Toronto Blue Jays MLB Jersey'
    }
  ]
  constructor() { }
  getPrizes(): Array<IPrize>{
    return this.prizes;
  }
}
