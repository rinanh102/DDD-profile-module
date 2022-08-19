// /* eslint-disable @typescript-eslint/no-empty-function */
// import { Provider, Scope } from '@heronjs/common';
// import { ProfileRelationshipDto } from '../../../features/profile/domain/dtos';
// import { MapperTokens } from '../../../constants';
// import { ProfileRelationship } from '../../../features/profile/domain/aggregates/profile/entities';
// import { IMapper } from '@cbidigital/aqua';

// export type IProfileRelationshipMapper = IMapper<ProfileRelationshipDto, ProfileRelationship>;

// @Provider({
//     token: MapperTokens.PROFILE_RELATIONSHIP,
//     scope: Scope.SINGLETON,
// })
// export class ProfileRelationshipMapper implements IProfileRelationshipMapper {
//     constructor() {}

//     fromEntityToDTO(entity: ProfileRelationship): ProfileRelationshipDto {
//         return {
//             id: entity.id,
//             typeId: entity.typeId,
//             parentId: entity.parentId,
//             childId: entity.childId,
//             createdAt: entity.createdAt,
//             // type: this._profileRelationshipTypeMapper.fromEntityToDTO(entity.type),
//             // parent: this._profileMapper.fromEntityToDTO(entity.parent),
//             // child: this._profileMapper.fromEntityToDTO(entity.child)
//         };
//     }

//     fromDTOToEntity(dto: ProfileRelationshipDto): ProfileRelationship {
//         return new ProfileRelationship(dto.id, {
//             typeId: dto.typeId,
//             parentId: dto.parentId,
//             childId: dto.childId,
//             createdAt: dto.createdAt,
//             // type: this._profileRelationshipTypeMapper.fromDTOToEntity(dto.type),
//             // parent: this._profileMapper.fromDTOToEntity(dto.parent),
//             // child: this._profileMapper.fromDTOToEntity(dto.child)
//         });
//     }
// }
