import { ModuleConnectionTypes } from '@cbidigital/aqua/module';

export const ModuleConnectorConfig = {
    type: process.env.PROFILE_MODULE_CONNECTION_TYPE as ModuleConnectionTypes,
    restfulConfig: {
        host: process.env.PROFILE_MODULE_HOST,
        pathname: {
            // profile
            profile: {
                getList: process.env.PROFILE_MODULE_PATHNAME_PROFILE_GET_LIST ?? '/internal/profiles',
                get: process.env.PROFILE_MODULE_PATHNAME_PROFILE_GET ?? '/internal/profiles',
                create: process.env.PROFILE_MODULE_PATHNAME_PROFILE_CREATE ?? '/internal/profiles',
                update: process.env.PROFILE_MODULE_PATHNAME_PROFILE_UPDATE ?? '/internal/profiles',
                updateByUserId:
                    process.env.PROFILE_MODULE_PATHNAME_PROFILE_UPDATE_BY_USER_ID ??
                    '/internal/profiles/by-user-id',
                delete: process.env.PROFILE_MODULE_PATHNAME_PROFILE_DELETE ?? '/internal/profiles',
            },
        },
        secretKey: process.env.SECRET_KEY_INTERNAL_API_PROFILE || 'token123',
    },
};
