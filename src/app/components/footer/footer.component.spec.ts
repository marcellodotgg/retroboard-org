import { TestBed } from '@angular/core/testing';
import { GITHUB_REPO } from '../../app.constants';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterComponent],
    });

    component = TestBed.inject(FooterComponent);
  });

  it('should return the the github repository url', () => {
    expect(component.githubRepoUrl).toBe(GITHUB_REPO);
  });
});
