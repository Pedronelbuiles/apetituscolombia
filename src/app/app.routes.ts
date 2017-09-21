import { RouterModule, Routes } from '@angular/router';

import { InicioComponent, 
		 NosotrosComponent, 
		 AsesoriasComponent, 
		 ServiciosComponent, 
		 MenuComponent 
		} from './component/index.paginas';

const app_routes:Routes = [
	{ path: '', component: InicioComponent },
	{ path: 'nosotros', component: NosotrosComponent },
	{ path: 'asesoria', component: AsesoriasComponent },
	{ path: 'servicios', component: ServiciosComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: '**', pathMatch: 'full', redirectTo:'' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
