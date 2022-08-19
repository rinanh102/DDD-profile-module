import { EavAttributeDTO, GetListEavAttributeUseCase, IBaseDao } from '@cbidigital/aqua';
export declare class GetListProfileAttributeUseCase extends GetListEavAttributeUseCase {
    constructor(_dao: IBaseDao<EavAttributeDTO>);
}
