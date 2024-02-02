import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule, MenubarModule, ToolbarModule, AvatarModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    itensMenu?: MenuItem[];

    ngOnInit() {
        this.itensMenu = [{
            label: 'File',
            items: [
                { label: 'New', icon: 'pi pi-plus' },
                { label: 'Open', icon: 'pi pi-download' }
            ]
        },
        {
            label: 'Edit',
            items: [
                { label: 'Undo', icon: 'pi pi-refresh' },
                { label: 'Redo', icon: 'pi pi-repeat' }
            ]
        }];
    }
}
