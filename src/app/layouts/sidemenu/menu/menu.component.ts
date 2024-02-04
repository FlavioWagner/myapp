import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [RouterModule, CommonModule, MenuModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    providers: [RouterModule]
})
export class MenuComponent implements OnInit {
    menu!: MenuItem[];

    ngOnInit() {

        this.menu = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
            {
                label: 'Sistemas',
                items: [
                    { label: 'Cargos', icon: 'pi pi-fw pi-user', routerLink: 'cargos' },
                    { label: 'Estados', icon: 'pi pi-fw pi-user', routerLink: 'estados' },

                ]
            },
            {
                label: 'Configurações',
                items: [
                    { label: 'API', icon: 'pi pi-fw pi-user', routerLink: 'admin/docs' },

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
