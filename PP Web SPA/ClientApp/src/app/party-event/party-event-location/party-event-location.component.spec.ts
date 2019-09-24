/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PartyEventLocationComponent } from './party-event-location.component';

let component: PartyEventLocationComponent;
let fixture: ComponentFixture<PartyEventLocationComponent>;

describe('party-event-location component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartyEventLocationComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PartyEventLocationComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});