/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PartyEventDrinksComponent } from './party-event-drinks.component';

let component: PartyEventDrinksComponent;
let fixture: ComponentFixture<PartyEventDrinksComponent>;

describe('party-event-drinks component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartyEventDrinksComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PartyEventDrinksComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});