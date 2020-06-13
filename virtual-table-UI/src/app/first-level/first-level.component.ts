import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.css']
})
export class FirstLevelComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  proteinData = {
    "0": {
      "name": "protease2",
      "image_path": "./assets/protease2_image.png",
      "level2": {
        "Calculations": 821004,
        "Compounds with docking data": 821004,
        "docked_compounds": {
          "0": {
            "coupound_identifier": "CHEMBL3814036",
            "top_scores": "GBSA -87.30, Docking -7.60, Late-Fusion 7.60,"
          }
        }
      }
    },
    "1": {
      "name": "spike",
      "image_path": "./assets/spike_image.png"
    },
    "2": {
      "name": "protease",
      "image_path": "./assets/protease_image.png"
    },
    "3": {
      "name": "spike1",
      "image_path": "./assets/spike1_image.png"
    }
  }

  level1Click(item: any) {
    console.log('Clicked level 1', item);
    this.router.navigate(['/second-level']);
  }
}
