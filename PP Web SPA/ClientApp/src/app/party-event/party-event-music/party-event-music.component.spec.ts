/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PartyEventMusicComponent } from './party-event-music.component';

let component: PartyEventMusicComponent;
let fixture: ComponentFixture<PartyEventMusicComponent>;

describe('party-event-music component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PartyEventMusicComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PartyEventMusicComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});