import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: any;

  constructor() {}

  ngOnInit(): void {
    this.activities = [
      {
        imageUrl: 'https://fundore.com/assets/uploads/prices/Gokart.jpg',
        name: 'GO Kart',
        description:
          'Unleash your go-kart racing genes and head for an exciting experience of go-karting in Indore with your friends and family members. Feel the thrill of speed with an amazing sense of safety. With special and separate go kart for kids and adults, make way for awesomeness. Enjoy this recreational activity, only at FUNDORE.',
        price: '100',
        priceDetails: '3 Lap',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/activity/free.jpg',
        name: 'FREE FALL',
        description:
          'All those fearless lads who love that adrenaline rush, take the Free Fall at Fundore. Free fall ride is the perfect activity for you to feel that kick and experience the rise, movements, rolls and falls.',
        price: '100',
        priceDetails: '1 time',
      },
      {
        imageUrl:
          'https://fundore.com/assets/uploads/price/target-shooting.jpg',
        name: 'PAINT BALL TARGET SHOOTING',
        description:
          'Want to play a target shooting game? So for all those precision lovers who want to experience the electrifying experience of shooting a target, go ahead for this one at FUNDORE.',
        price: '100',
        priceDetails: '10 Ball',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/prices/wall-climbing.jpg',
        name: 'WALL CLIMBING',
        description:
          'Wall climbing sounds tough, but what if we told you that it is totally worth the effort. A climbing wall is an artificially constructed wall with grips for hands and feet. We have world class equipment, operated by a team of trained professionals, who are going to take care of you throughout the course.',
        price: '100',
        priceDetails: '1 time',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/prices/Hunting.jpg',
        name: 'HUNTING',
        description:
          'Hunting games are fun. Hunting is no longer a thing humans need to do for food, but some people enjoy it for sport. Bust out the buckshot, grab your camouflage gear, and get ready to skeet shoot or hunt animals at FUNDORE virtual hunting zone.',
        price: '150',
        priceDetails: '100 Bullets',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/price/ropecourse.jpg',
        name: 'ROPE COURSE',
        description:
          'With exciting obstacles, experience a unique combination of adventure, teamwork and physical exercise. We are proud to mention that we have the biggest rope course in Madhya Pradesh with 18 obstacles divided in three levels.',
        price: '200',
        priceDetails: '1 Time',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/prices/fun-wall.jpg',
        name: 'FUN WALL',
        description:
          "The Fun Wall is an interactive wall with loads of fun! Climbing wall is every child's dream. Make your kids happy and entertained for hours.",
        price: '250',
        priceDetails: '8 Walls',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/prices/air-hokey.jpg',
        name: 'AIR HOCKEY',
        description:
          'Air Hockey is a fun game that helps to develop skills like dexterity, agility, hand-eye coordination and quick reaction time at the same time. Air Hockey is a wonderful activity which you can try.',
        price: '50',
        priceDetails: '1 Game',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/prices/Billiards.jpg',
        name: 'BILLIARD',
        description:
          'Are you good at playing pool? Welcome to the wonderful world of billiards at FUNDORE. Grab your cue stick, billiard tables are waiting for you. Don&rsquo t stop until the last ball falls!',
        price: '150',
        priceDetails: '30 min',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/price/SandPlayArena.jpg',
        name: 'SAND PLAY ARENA',
        description:
          "Why should grown-ups have all the fun? Central India's largest indoor sand play arena is waiting! Bring your child to Fundore and let them enjoy and play to the fullest.",
        price: '150',
        priceDetails: '30 min',
      },
      {
        imageUrl: 'https://fundore.com/assets/uploads/entertainment/Rappelling.jpg',
        name: 'RAPPELLING',
        description:
          "Are you ready for the heart-stopping action of rope for rappelling? Challenge yourself and conquer your fear with our rappelling rope set up with five point safety measures.",
        price: '100',
        priceDetails: '1 time',
      },
    ];
  }
}
