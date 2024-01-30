import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [RouterModule, CommonModule, MenuModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
    menu!: MenuItem[];

    ngOnInit() {

        this.menu = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
            {
                label: 'Sistemas',
                items: [
                    { label: 'Física', icon: 'pi pi-fw pi-user', routerLink: '/' },
                    { label: 'Jurídica', icon: 'pi pi-fw pi-building', routerLink: '/' },

                ]
            },
            {
                label: 'Configurações',
                items: [
                    { label: 'Cargos', icon: 'pi pi-fw pi-user', routerLink: 'cargos' },
                ]
            },
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement>event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }


}
