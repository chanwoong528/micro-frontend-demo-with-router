import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrap = async () => {
    try {
        const platform = platformBrowserDynamic();
        const moduleRef = await platform.bootstrapModule(AppModule);
        return moduleRef;
    } catch (err) {
        console.error('Angular modülü başlatılırken hata oluştu:', err);
        throw err;
    }
};

export { bootstrap };

// Standalone modda çalıştığında bootstrap'i otomatik başlat
if (!(window as any).angularApp) {
    bootstrap();
} 