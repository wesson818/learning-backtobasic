import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// doka
import {
    // editor
    locale_en_gb,
    createDefaultImageReader,
    createDefaultImageWriter,

    // plugins
    setPlugins,
    plugin_crop,
    plugin_crop_locale_en_gb,
    plugin_crop_defaults,
    plugin_finetune,
    plugin_finetune_locale_en_gb,
    plugin_finetune_defaults,
    plugin_filter,
    plugin_filter_locale_en_gb,
    plugin_filter_defaults,
    plugin_decorate,
    plugin_decorate_defaults,
    plugin_decorate_locale_en_gb,
    component_shape_editor_locale_en_gb,
} from 'doka';

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_decorate);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [],
})
export class AppComponent {
    constructor(private sanitizer: DomSanitizer) {}

    // editor generic state
    editorOptions: any = {
        imageReader: createDefaultImageReader(),
        imageWriter: createDefaultImageWriter(),
        ...plugin_crop_defaults,
        ...plugin_finetune_defaults,
        ...plugin_filter_defaults,
        ...plugin_decorate_defaults,
        locale: {
            ...locale_en_gb,
            ...plugin_crop_locale_en_gb,
            ...plugin_finetune_locale_en_gb,
            ...plugin_filter_locale_en_gb,
            ...plugin_decorate_locale_en_gb,
            ...component_shape_editor_locale_en_gb,
        },
    };

    // inline
    inlineSrc: SafeUrl = 'assets/image.jpeg';
    inlineResult: SafeUrl = undefined;

    handleInlineLoad($event) {
        console.log('inline load', $event);
    }

    handleInlineProcess($event) {
        console.log('inline process', $event);
        const objectURL = URL.createObjectURL($event.dest);
        this.inlineResult = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }

    // modal
    modalSrc: SafeUrl = 'assets/image.jpeg';
    modalResult: SafeUrl = undefined;
    modalVisible: boolean = false;

    handleModalLoad($event) {
        console.log('modal load', $event);
    }

    handleModalProcess($event) {
        console.log('modal process', $event);
        const objectURL = URL.createObjectURL($event.dest);
        this.modalResult = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }

    // overlay
    overlaySrc: SafeUrl = 'assets/image.jpeg';
    overlayVisible: boolean = false;
    overlayResult: SafeUrl = undefined;
    overlayOptions: any = {
        imageReader: createDefaultImageReader(),
        imageWriter: createDefaultImageWriter(),
        locale: {
            ...locale_en_gb,
            ...plugin_crop_locale_en_gb,
        },
    };

    handleOverlayLoad($event) {
        console.log('overlay load', $event);
    }

    handleOverlayProcess($event) {
        const objectURL = URL.createObjectURL($event.dest);
        this.overlayResult = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        this.overlayOptions = {
            ...this.overlayOptions,
            imageState: $event.imageState,
        };

        this.overlayVisible = false;
    }
}
