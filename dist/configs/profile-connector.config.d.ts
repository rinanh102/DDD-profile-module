import { ModuleConnectionTypes } from '@cbidigital/aqua/module';
export declare const ModuleConnectorConfig: {
    type: ModuleConnectionTypes;
    restfulConfig: {
        host: string | undefined;
        pathname: {
            profile: {
                getList: string;
                get: string;
                create: string;
                update: string;
                updateByUserId: string;
                delete: string;
            };
        };
        secretKey: string;
    };
};
