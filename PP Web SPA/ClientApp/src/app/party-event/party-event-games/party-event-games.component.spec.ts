/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PartyEventGamesComponent } from './party-event-games.component';

let component: PartyEventGamesComponent;
let fixture: ComponentFixture<PartyEventGamesComponent>;

describe('party-event-games component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartyEventGamesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PartyEventGamesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});