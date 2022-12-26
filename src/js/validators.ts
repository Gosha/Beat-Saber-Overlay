import Joi from "joi";

export interface MapData {
    InLevel: boolean;
    LevelPaused: boolean;
    LevelFinished: boolean;
    LevelFailed: boolean;
    LevelQuit: boolean;
    SongName: string;
    SongSubName: string;
    SongAuthor: string;
    Mapper: string;
    Difficulty: string;
    Duration: number;
    Star: number;
    PP: number;
    BSRKey: string | null;
    CoverImage: string | null;
}

const mapDataSchema = Joi.object<MapData>({
    InLevel: Joi.boolean(),
    SongName: Joi.string().allow(''),
    SongSubName: Joi.string().allow(''),
    SongAuthor: Joi.string().allow(''),
    Mapper: Joi.string().allow(''),
    Difficulty: Joi.string().allow(''),
    Star: Joi.number(),
    PP: Joi.number(),
    Duration: Joi.number(),
    BSRKey: Joi.string().allow(null),
    CoverImage: Joi.string().allow(null),
});

export const validateMapData = (data: unknown): MapData | null => {
    if (data === null) return null;
    const validation = mapDataSchema.validate(data, {
        abortEarly: true,
        stripUnknown: true,
    })
    if (validation.error) {
        console.error(validation.error);
        return null;
    }
    return validation.value;
}


