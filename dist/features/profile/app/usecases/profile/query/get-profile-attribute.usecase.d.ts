import { EavAttributeDTO, GetEavAttributeUseCase, IBaseDao } from '@cbidigital/aqua';
export declare class GetProfileAttributeUseCase extends GetEavAttributeUseCase {
    constructor(_dao: IBaseDao<EavAttributeDTO>);
}
