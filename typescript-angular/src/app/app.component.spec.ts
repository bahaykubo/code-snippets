import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('App Component', () => {
  let component: AppComponent;

  describe('Logic', () => {
    beforeEach(() => {
      component = new AppComponent();
    });

    describe('Get bike size', () => {
      describe('should recommend size small', () => {
        it('if customer height is 165', () => {
          component.customerHeight = 165;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Small');
        });

        it('if customer height is 155', () => {
          component.customerHeight = 155;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Small');
        });

        it('if customer height is 175', () => {
          component.customerHeight = 175;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Small');
        });
      });

      describe('should recommend size medium', () => {
        it('if customer height is between 175 and 195', () => {
          component.customerHeight = 185;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Medium');
        });

        it('if customer height is 176', () => {
          component.customerHeight = 176;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Medium');
        });

        it('if customer height is 195', () => {
          component.customerHeight = 195;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Medium');
        });
      });

      describe('should recommend size large', () => {
        it('if customer height is between 195 and 215', () => {
          component.customerHeight = 205;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Large');
        });

        it('if customer height is 196', () => {
          component.customerHeight = 196;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Large');
        });

        it('if customer height is 215', () => {
          component.customerHeight = 215;
          component.getBikeSize();
          expect(component.bikeSize).toBe('Large');
        });
      });

      it('should not recommend a size if customer height is not within any size range', () => {
        component.customerHeight = 135;
        component.getBikeSize();
        expect(component.bikeSize).toBe('NA');
      });
    });

    describe('Template', () => {
      let fixture: ComponentFixture<AppComponent>;

      beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [
            AppComponent
          ],
        })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(AppComponent);
          component = fixture.componentInstance;
        });
      }));

      it('should create the app', () => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });

      it('should recomment the bike size if the cusomer is within a size range', () => {
        component.bikeSize = 'Small';
        fixture.detectChanges();
        const elem = fixture.debugElement.query(By.css('div[name="bikeFit"]')).nativeElement;
        expect(elem.textContent).toContain('Small');
      });

      it('should recommend the customer to contact the store if no size fits', () => {
        component.bikeSize = 'NA';
        fixture.detectChanges();
        const elem = fixture.debugElement.query(By.css('div[name="noFit"]')).nativeElement;
        expect(elem).toBeTruthy();
      });
    });
  });
});
