import {Prisma} from "@server/.prisma";

const initialCustomization: Omit<Prisma.CharacterCustomizationCreateInput, "character"> = {
    overlays: JSON.stringify({}),
    faceFeatures: JSON.stringify({}),
    model: 1,
    components: JSON.stringify({}),
    headBlend: JSON.stringify({}),
    props: JSON.stringify({}),
}

const initialStatus: Omit<Prisma.CharacterStatusCreateInput, "character"> = {
    armour: 0,
    heading: 0.0,
    health: 100,
    positionX: -1496.912109375,
    positionY: -2982.8540039062,
    positionZ: -82.207237243652,
}

const initialStates = {
    status: initialStatus,
    customization: initialCustomization
}

export const CHARACTER_DEFAULT_CONFIG = {
    initialStates
}