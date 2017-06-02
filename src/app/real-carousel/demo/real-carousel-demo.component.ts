import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: 'real-carousel-demo.component.html'
})

export class RealCarouselDemoComponent implements OnInit {
    constructor() { }
    private items: any[];
    ngOnInit() { 
        this.items = [
            {text: '1', image: 'fa-bar-chart'},
            {text: '2', image: 'fa-calendar'},
            {text: '3', image: 'fa-book'},
            {text: '4', image: 'fa-support'},
            {text: '5', image: 'fa-twitter'},
            {text: '6', image: 'fa-twitter'},
            {text: '7', image: 'fa-twitter'},
            {text: '8', image: 'fa-twitter'},
            {text: '9', image: 'fa-twitter'}
        ];

    }
}