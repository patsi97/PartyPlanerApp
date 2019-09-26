/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PartyEventFoodComponent } from './party-event-food.component';

let component: PartyEventFoodComponent;
let fixture: ComponentFixture<PartyEventFoodComponent>;

describe('party-event-food component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartyEventFoodComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PartyEventFoodComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});