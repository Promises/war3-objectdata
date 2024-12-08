import { IDs, Container } from '../container';
export interface Destructable extends IDs {
    name: string;
    editorSuffix: string;
    category: string;
    tilesets: string;
    hasTilesetSpecificData: boolean;
    modelFile: string;
    modelFileHasLightweightModel: boolean;
    fatLineOfSight: boolean;
    replaceableTextureID: number;
    replaceableTextureFile: string;
    showHelperObjectForSelection: boolean;
    placeableOnCliffs: boolean;
    placeableOnWater: boolean;
    showDeadVersionInPalette: boolean;
    isWalkable: boolean;
    cliffHeight: number;
    targetedAs: string;
    armorType: string;
    modelFileVariations: number;
    hitPoints: number;
    occlusionHeight: number;
    flyOverHeight: number;
    fixedRotation: number;
    selectionSizeEditor: number;
    minimumScale: number;
    maximumScale: number;
    canPlaceRandomScale: boolean;
    maximumPitchAngleDegrees: number;
    maxRollAngleDegrees: number;
    elevationSampleRadius: number;
    fogRadius: number;
    fogVisibility: boolean;
    pathingTexture: string;
    pathingTextureDead: string;
    death: string;
    loopingSound: string;
    shadow: string;
    minimapShow: boolean;
    minimapColor1Red: number;
    minimapColor2Green: number;
    minimapColor3Blue: number;
    minimapUseCustomColor: boolean;
    buildTime: number;
    repairTime: number;
    repairGoldCost: number;
    repairLumberCost: number;
    onUserSpecifiedList: boolean;
    tintingColor1Red: number;
    tintingColor2Green: number;
    tintingColor3Blue: number;
    selectableInGame: boolean;
    selectionSizeGame: number;
    modelFilePortrait: string;
}
export declare const DestructableProps: ({
    id: "bnam";
    name: "name";
    type: "string";
    netsafe: "true";
} | {
    id: "bsuf";
    name: "editorSuffix";
    type: "string";
    netsafe: "true";
} | {
    id: "bcat";
    name: "category";
    type: "destructableCategory";
    netsafe: "false";
} | {
    id: "btil";
    name: "tilesets";
    type: "tilesetList";
    netsafe: "false";
} | {
    id: "btsp";
    name: "hasTilesetSpecificData";
    type: "bool";
    netsafe: "false";
} | {
    id: "bfil";
    name: "modelFile";
    type: "model";
    netsafe: "true";
} | {
    id: "blit";
    name: "modelFileHasLightweightModel";
    type: "bool";
    netsafe: "true";
} | {
    id: "bflo";
    name: "fatLineOfSight";
    type: "bool";
    netsafe: "false";
} | {
    id: "btxi";
    name: "replaceableTextureID";
    type: "int";
    netsafe: "true";
} | {
    id: "btxf";
    name: "replaceableTextureFile";
    type: "texture";
    netsafe: "true";
} | {
    id: "buch";
    name: "showHelperObjectForSelection";
    type: "bool";
    netsafe: "true";
} | {
    id: "bonc";
    name: "placeableOnCliffs";
    type: "bool";
    netsafe: "false";
} | {
    id: "bonw";
    name: "placeableOnWater";
    type: "bool";
    netsafe: "false";
} | {
    id: "bcpd";
    name: "showDeadVersionInPalette";
    type: "bool";
    netsafe: "false";
} | {
    id: "bwal";
    name: "isWalkable";
    type: "bool";
    netsafe: "false";
} | {
    id: "bclh";
    name: "cliffHeight";
    type: "int";
    netsafe: "false";
} | {
    id: "btar";
    name: "targetedAs";
    type: "targetList";
    netsafe: "false";
} | {
    id: "barm";
    name: "armorType";
    type: "armorType";
    netsafe: "false";
} | {
    id: "bvar";
    name: "modelFileVariations";
    type: "int";
    netsafe: "true";
} | {
    id: "bhps";
    name: "hitPoints";
    type: "unreal";
    netsafe: "false";
} | {
    id: "boch";
    name: "occlusionHeight";
    type: "unreal";
    netsafe: "false";
} | {
    id: "bflh";
    name: "flyOverHeight";
    type: "unreal";
    netsafe: "false";
} | {
    id: "bfxr";
    name: "fixedRotation";
    type: "unreal";
    netsafe: "true";
} | {
    id: "bsel";
    name: "selectionSizeEditor";
    type: "unreal";
    netsafe: "true";
} | {
    id: "bmis";
    name: "minimumScale";
    type: "unreal";
    netsafe: "true";
} | {
    id: "bmas";
    name: "maximumScale";
    type: "unreal";
    netsafe: "true";
} | {
    id: "bcpr";
    name: "canPlaceRandomScale";
    type: "bool";
    netsafe: "true";
} | {
    id: "bmap";
    name: "maximumPitchAngleDegrees";
    type: "unreal";
    netsafe: "true";
} | {
    id: "bmar";
    name: "maxRollAngleDegrees";
    type: "unreal";
    netsafe: "true";
} | {
    id: "brad";
    name: "elevationSampleRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "bfra";
    name: "fogRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "bfvi";
    name: "fogVisibility";
    type: "bool";
    netsafe: "false";
} | {
    id: "bptx";
    name: "pathingTexture";
    type: "pathingTexture";
    netsafe: "true";
} | {
    id: "bptd";
    name: "pathingTextureDead";
    type: "pathingTexture";
    netsafe: "true";
} | {
    id: "bdsn";
    name: "death";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "bsnd";
    name: "loopingSound";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "bshd";
    name: "shadow";
    type: "shadowTexture";
    netsafe: "true";
} | {
    id: "bsmm";
    name: "minimapShow";
    type: "bool";
    netsafe: "true";
} | {
    id: "bmmr";
    name: "minimapColor1Red";
    type: "int";
    netsafe: "true";
} | {
    id: "bmmg";
    name: "minimapColor2Green";
    type: "int";
    netsafe: "true";
} | {
    id: "bmmb";
    name: "minimapColor3Blue";
    type: "int";
    netsafe: "true";
} | {
    id: "bumm";
    name: "minimapUseCustomColor";
    type: "bool";
    netsafe: "true";
} | {
    id: "bbut";
    name: "buildTime";
    type: "int";
    netsafe: "false";
} | {
    id: "bret";
    name: "repairTime";
    type: "int";
    netsafe: "false";
} | {
    id: "breg";
    name: "repairGoldCost";
    type: "int";
    netsafe: "false";
} | {
    id: "brel";
    name: "repairLumberCost";
    type: "int";
    netsafe: "false";
} | {
    id: "busr";
    name: "onUserSpecifiedList";
    type: "bool";
    netsafe: "false";
} | {
    id: "bvcr";
    name: "tintingColor1Red";
    type: "int";
    netsafe: "true";
} | {
    id: "bvcg";
    name: "tintingColor2Green";
    type: "int";
    netsafe: "true";
} | {
    id: "bvcb";
    name: "tintingColor3Blue";
    type: "int";
    netsafe: "true";
} | {
    id: "bgse";
    name: "selectableInGame";
    type: "bool";
    netsafe: "false";
} | {
    id: "bgsc";
    name: "selectionSizeGame";
    type: "real";
    netsafe: "true";
} | {
    id: "bgpm";
    name: "modelFilePortrait";
    type: "model";
    netsafe: "true";
})[];
export declare enum Destructables {
    AshenvaleCanopyTree = "ATtc",
    AshenvaleTreeWall = "ATtr",
    Barrel = "LTbr",
    Barrel1 = "LTbx",
    Barrel2 = "LTbs",
    BarrelOfExplosives = "LTex",
    BarrensCanopyTree = "BTtc",
    BarrensTreeWall = "BTtw",
    Barricade = "LTba",
    BlackCitadelTreeWall = "KTtw",
    BridgeDestroyed = "YSdb",
    BridgeDestroyed1 = "YSdc",
    Cage = "LOcg",
    CityEntrance = "YTce",
    CityEntrance1 = "YTcx",
    CityscapeFallTreeWall = "YTft",
    CityscapeRuinedTreeWall = "JTct",
    CityscapeSnowyTreeWall = "YTst",
    CityscapeSummerTreeWall = "YTct",
    CityscapeWinterTreeWall = "YTwt",
    CliffCaveGate1 = "DTc1",
    CliffCaveGate2 = "DTc2",
    Crates = "LTcr",
    DalaranBuilding = "XTbd",
    DalaranRuinsTreeWall = "JTtw",
    DalaranVioletCitadel = "XTvt",
    DemonStorm = "OTds",
    DemonicGateDiagonal1 = "ATg2",
    DemonicGateDiagonal2 = "ATg4",
    DemonicGateHorizontal = "ATg1",
    DemonicGateVertical = "ATg3",
    DungeonGateDiagonal1 = "DTg2",
    DungeonGateDiagonal2 = "DTg4",
    DungeonGateHorizontal = "DTg1",
    DungeonGateVertical = "DTg3",
    DungeonSpikes = "DTsp",
    DungeonTreeWall = "DTsh",
    EggSack = "DTes",
    Elevator1 = "DTrf",
    Elevator2 = "DTrx",
    ElevatorWall = "DTep",
    ElvenBridge = "YT67",
    ElvenGateDiagonal1 = "LTe2",
    ElvenGateDiagonal2 = "LTe4",
    ElvenGateHorizontal = "LTe1",
    ElvenGateVertical = "LTe3",
    ExtraWideNaturalBridgeDiagonal1 = "YT49",
    ExtraWideNaturalBridgeDiagonal2 = "YT51",
    ExtraWideNaturalBridgeHorizontal = "YT50",
    ExtraWideNaturalBridgeVertical = "YT48",
    FallTreeWall = "FTtw",
    FelwoodCanopyTree = "CTtc",
    FelwoodTreeWall = "CTtr",
    FootSwitch = "DTfp",
    FootSwitch1 = "DTfx",
    ForceBridgeDiagonal1 = "DTs1",
    ForceBridgeDiagonal2 = "DTs3",
    ForceBridgeHorizontal = "DTs2",
    ForceBridgeVertical = "DTs0",
    ForceWall = "Dofw",
    ForceWall1 = "Dofv",
    FrozenThroneGate = "ITtg",
    GateDiagonal1 = "LTg2",
    GateDiagonal2 = "LTg4",
    GateHorizontal = "LTg1",
    GateVertical = "LTg3",
    IceBridgeDiagonal1 = "ITi2",
    IceBridgeDiagonal2 = "ITi4",
    IceBridgeHorizontal = "ITi3",
    IceBridgeVertical = "ITib",
    IceFloe = "ITf1",
    IceFloe1 = "ITf2",
    IceFloe2 = "ITf3",
    IceFloe3 = "ITf4",
    IceRockGateDiagonal1 = "ITx2",
    IceRockGateDiagonal2 = "ITx4",
    IceRockGateHorizontal = "ITx1",
    IceRockGateVertical = "ITx3",
    IcecrownCanopyTree = "ITtc",
    IcecrownCitadelEntrance = "YTc1",
    IcecrownThrone = "IOt0",
    IcecrownThroneDiagonal1 = "IOt1",
    IcecrownThroneDiagonal11 = "IOt2",
    IcecrownTreeWall = "ITtw",
    IceyRock = "ITcr",
    IcyGateDiagonal1 = "ITg2",
    IcyGateDiagonal2 = "ITg4",
    IcyGateHorizontal = "ITg1",
    IcyGateVertical = "ITg3",
    Igloo = "ITig",
    InvisiblePlatform = "OTip",
    InvisiblePlatformSmall = "OTis",
    IronGateDiagonal1 = "DTg6",
    IronGateDiagonal2 = "DTg8",
    IronGateHorizontal = "DTg5",
    IronGateVertical = "DTg7",
    KingsThrone = "XOkt",
    KingsThroneDiagonal1 = "XOk1",
    KingsThroneDiagonal11 = "XOk2",
    LastHopeBridgeHorizontal = "LTtx",
    LastHopeBridgeVertical = "LTtc",
    Lever = "DTlv",
    LineOfSightBlocker = "YTlb",
    LineOfSightBlockerLarge = "Ytlc",
    LionStatue = "BTs2",
    LionStatueDestroyed = "BTs3",
    LongElvenBridgeDiagonal1 = "EB05",
    LongElvenBridgeDiagonal2 = "EB07",
    LongElvenBridgeHorizontal = "EB06",
    LongElvenBridgeVertical = "EB04",
    LongNaturalBridgeDiagonal1 = "YT05",
    LongNaturalBridgeDiagonal11 = "YT29",
    LongNaturalBridgeDiagonal2 = "YT07",
    LongNaturalBridgeDiagonal21 = "YT31",
    LongNaturalBridgeHorizontal = "YT06",
    LongNaturalBridgeHorizontal1 = "YT30",
    LongNaturalBridgeVertical = "YT04",
    LongNaturalBridgeVertical1 = "YT28",
    LongNightElvenWoodenBridgeDiagonal1 = "NB05",
    LongNightElvenWoodenBridgeDiagonal2 = "NB07",
    LongNightElvenWoodenBridgeHorizontal = "NB06",
    LongNightElvenWoodenBridgeVertical = "NB04",
    LongOvergrownBridgeDiagonal1 = "OG05",
    LongOvergrownBridgeDiagonal2 = "OG07",
    LongOvergrownBridgeHorizontal = "OG06",
    LongOvergrownBridgeVertical = "OG04",
    LongRicketyWoodenBridgeDiagonal1 = "RW05",
    LongRicketyWoodenBridgeDiagonal2 = "RW07",
    LongRicketyWoodenBridgeHorizontal = "RW06",
    LongRicketyWoodenBridgeVertical = "RW04",
    LongStoneBridgeDiagonal1 = "YT17",
    LongStoneBridgeDiagonal11 = "YT41",
    LongStoneBridgeDiagonal2 = "YT19",
    LongStoneBridgeDiagonal21 = "YT43",
    LongStoneBridgeHorizontal = "YT18",
    LongStoneBridgeHorizontal1 = "YT42",
    LongStoneBridgeVertical = "YT16",
    LongStoneBridgeVertical1 = "YT40",
    LongStratholmeBridgeDiagonal1 = "YY17",
    LongStratholmeBridgeDiagonal2 = "YY19",
    LongStratholmeBridgeHorizontal = "YY18",
    LongStratholmeBridgeVertical = "YY16",
    LongWoodenBridgeDiagonal1 = "LT05",
    LongWoodenBridgeDiagonal2 = "LT07",
    LongWoodenBridgeHorizontal = "LT06",
    LongWoodenBridgeVertical = "LT04",
    LordaeronCityDome = "XTv1",
    LordaeronCityDomeDestroyed = "XTv2",
    LordaeronCityMainBuilding = "XTv3",
    LordaeronCityMainBuildingDestroyed = "XTv4",
    LordaeronCityMainGate = "YTc2",
    LordaeronCityMainGateColumn = "BTsk",
    LordaeronCityMainGateColumnDestroyed = "BTs1",
    LordaeronCityMainGateDestroyed = "YTc4",
    LordaeronCitySpire = "BTs4",
    LordaeronCitySpireDestroyed = "BTs5",
    MagicalPen = "XTmp",
    MagicalPenAngled = "XTm5",
    MagicalPenWall = "XTmx",
    MagicalPenWallAngled = "XTx5",
    MassiveRuinedGateHorizontal = "ZTsx",
    MassiveRuinedGateVertical = "ZTsg",
    NorthrendCanopyTree = "NTtc",
    NorthrendIcyTreeWall = "NTiw",
    NorthrendTreeWall = "NTtw",
    OrgrimmarGate = "YTcn",
    OrgrimmarTowerCompleted = "XTv8",
    OrgrimmarTowerUnderConstruction = "XTv7",
    OrgrimmarWallSegmentCompleted = "XTv6",
    OrgrimmarWallSegmentUnderConstruction = "XTv5",
    OutlandTreeWall = "OTtw",
    PathingBlockerAir = "YTab",
    PathingBlockerAirLarge = "YTac",
    PathingBlockerBoth = "YTfb",
    PathingBlockerBothLarge = "YTfc",
    PathingBlockerGround = "YTpb",
    PathingBlockerGroundLarge = "YTpc",
    RampNagaSmallBottom = "ZTr3",
    RampNagaSmallLeft = "ZTr0",
    RampNagaSmallRight = "ZTr2",
    RampNagaSmallTop = "ZTr1",
    ResurrectionStone = "BTrs",
    ResurrectionStone1 = "BTrx",
    RockChunks = "DTrc",
    RockChunks1 = "LTrc",
    RockChunks2 = "LTrt",
    RockinArthas = "ITag",
    RollingStoneDoorHorizontal1 = "ZTd1",
    RollingStoneDoorHorizontal11 = "ITd1",
    RollingStoneDoorHorizontal2 = "ZTd3",
    RollingStoneDoorHorizontal21 = "ITd3",
    RollingStoneDoorHorizontal3 = "ZTd5",
    RollingStoneDoorHorizontal4 = "ZTd7",
    RollingStoneDoorVertical1 = "ZTd2",
    RollingStoneDoorVertical11 = "ITd2",
    RollingStoneDoorVertical2 = "ZTd4",
    RollingStoneDoorVertical21 = "ITd4",
    RollingStoneDoorVertical3 = "ZTd6",
    RollingStoneDoorVertical4 = "ZTd8",
    RuinedGateDiagonal1 = "ZTg2",
    RuinedGateDiagonal2 = "ZTg4",
    RuinedGateHorizontal = "ZTg1",
    RuinedGateVertical = "ZTg3",
    RuinsCanopyTree = "ZTtc",
    RuinsNagaCircle = "ZTnc",
    RuinsTreeWall = "ZTtw",
    ScorchedTreeWall = "YTsc",
    ShimmeringPortal = "OTsp",
    Ship = "NTbd",
    ShortElvenBridgeDiagonal1 = "EB01",
    ShortElvenBridgeDiagonal2 = "EB03",
    ShortElvenBridgeHorizontal = "EB02",
    ShortElvenBridgeVertical = "EB00",
    ShortNaturalBridgeDiagonal1 = "YT01",
    ShortNaturalBridgeDiagonal11 = "YT25",
    ShortNaturalBridgeDiagonal2 = "YT03",
    ShortNaturalBridgeDiagonal21 = "YT27",
    ShortNaturalBridgeHorizontal = "YT02",
    ShortNaturalBridgeHorizontal1 = "YT26",
    ShortNaturalBridgeVertical = "YT00",
    ShortNaturalBridgeVertical1 = "YT24",
    ShortNightElvenWoodenBridgeDiagonal1 = "NB01",
    ShortNightElvenWoodenBridgeDiagonal2 = "NB03",
    ShortNightElvenWoodenBridgeHorizontal = "NB02",
    ShortNightElvenWoodenBridgeVertical = "NB00",
    ShortOvergrownBridgeDiagonal1 = "OG01",
    ShortOvergrownBridgeDiagonal2 = "OG03",
    ShortOvergrownBridgeHorizontal = "OG02",
    ShortOvergrownBridgeVertical = "OG00",
    ShortRicketyWoodenBridgeDiagonal1 = "RW01",
    ShortRicketyWoodenBridgeDiagonal2 = "RW03",
    ShortRicketyWoodenBridgeHorizontal = "RW02",
    ShortRicketyWoodenBridgeVertical = "RW00",
    ShortStoneBridgeDiagonal1 = "YT13",
    ShortStoneBridgeDiagonal11 = "YT37",
    ShortStoneBridgeDiagonal2 = "YT15",
    ShortStoneBridgeDiagonal21 = "YT39",
    ShortStoneBridgeHorizontal = "YT14",
    ShortStoneBridgeHorizontal1 = "YT38",
    ShortStoneBridgeVertical = "YT12",
    ShortStoneBridgeVertical1 = "YT36",
    ShortStratholmeBridgeDiagonal1 = "YY13",
    ShortStratholmeBridgeDiagonal2 = "YY15",
    ShortStratholmeBridgeHorizontal = "YY14",
    ShortStratholmeBridgeVertical = "YY12",
    ShortWoodenBridgeDiagonal1 = "LT01",
    ShortWoodenBridgeDiagonal2 = "LT03",
    ShortWoodenBridgeHorizontal = "LT02",
    ShortWoodenBridgeVertical = "LT00",
    SilvermoonTree = "Yts1",
    SnowyTreeWall = "WTst",
    SpecialIceBridge = "YT66",
    StoneRampBottomLeft = "LTr1",
    StoneRampBottomLeft1 = "LTs1",
    StoneRampBottomLeft2 = "LTr5",
    StoneRampBottomLeft21 = "LTs5",
    StoneRampBottomRight = "LTr4",
    StoneRampBottomRight1 = "LTs4",
    StoneRampBottomRight2 = "LTr8",
    StoneRampBottomRight21 = "LTs8",
    StoneRampTopLeft = "LTr2",
    StoneRampTopLeft1 = "LTs2",
    StoneRampTopLeft2 = "LTr6",
    StoneRampTopLeft21 = "LTs6",
    StoneRampTopRight = "LTr3",
    StoneRampTopRight1 = "LTs3",
    StoneRampTopRight2 = "LTr7",
    StoneRampTopRight21 = "LTs7",
    StoneWallDiagonal1 = "LTw3",
    StoneWallDiagonal11 = "ZTw3",
    StoneWallDiagonal12 = "ITw3",
    StoneWallDiagonal2 = "LTw1",
    StoneWallDiagonal21 = "ZTw1",
    StoneWallDiagonal22 = "ITw1",
    StoneWallHorizontal = "LTw0",
    StoneWallHorizontal1 = "ZTw0",
    StoneWallHorizontal2 = "ITw0",
    StoneWallVertical = "LTw2",
    StoneWallVertical1 = "ZTw2",
    StoneWallVertical2 = "ITw2",
    SummerTreeWall = "LTlt",
    SupportColumn = "BTsc",
    TreeBridgeHorizontal = "LTt1",
    TreeBridgeHorizontal1 = "LTt3",
    TreeBridgeHorizontal2 = "ATt0",
    TreeBridgeHorizontal3 = "LTt5",
    TreeBridgeVertical = "LTt0",
    TreeBridgeVertical1 = "LTt2",
    TreeBridgeVertical2 = "LTt4",
    TreeBridgeVertical3 = "ATt1",
    UndergroundTreeWall = "GTsh",
    VillageTreeWall = "VTlt",
    Volcano = "Volc",
    WaygateRamp = "WGTR",
    Wharf = "ATwf",
    WideElvenBridgeDiagonal1 = "EB09",
    WideElvenBridgeDiagonal2 = "EB11",
    WideElvenBridgeHorizontal = "EB10",
    WideElvenBridgeVertical = "EB08",
    WideNaturalBridgeDiagonal1 = "YT09",
    WideNaturalBridgeDiagonal11 = "YT33",
    WideNaturalBridgeDiagonal2 = "YT11",
    WideNaturalBridgeDiagonal21 = "YT35",
    WideNaturalBridgeHorizontal = "YT10",
    WideNaturalBridgeHorizontal1 = "YT34",
    WideNaturalBridgeVertical = "YT08",
    WideNaturalBridgeVertical1 = "YT32",
    WideNightElvenWoodenBridgeDiagonal1 = "NB09",
    WideNightElvenWoodenBridgeDiagonal2 = "NB11",
    WideNightElvenWoodenBridgeHorizontal = "NB10",
    WideNightElvenWoodenBridgeVertical = "NB08",
    WideOvergrownBridgeDiagonal1 = "OG09",
    WideOvergrownBridgeDiagonal2 = "OG11",
    WideOvergrownBridgeHorizontal = "OG10",
    WideOvergrownBridgeVertical = "OG08",
    WideRicketyWoodenBridgeDiagonal1 = "RW09",
    WideRicketyWoodenBridgeDiagonal2 = "RW11",
    WideRicketyWoodenBridgeHorizontal = "RW10",
    WideRicketyWoodenBridgeVertical = "RW08",
    WideStoneBridgeDiagonal1 = "YT21",
    WideStoneBridgeDiagonal11 = "YT45",
    WideStoneBridgeDiagonal2 = "YT23",
    WideStoneBridgeDiagonal21 = "YT47",
    WideStoneBridgeHorizontal = "YT22",
    WideStoneBridgeHorizontal1 = "YT46",
    WideStoneBridgeVertical = "YT20",
    WideStoneBridgeVertical1 = "YT44",
    WideStratholmeBridgeDiagonal1 = "YY21",
    WideStratholmeBridgeDiagonal2 = "YY23",
    WideStratholmeBridgeHorizontal = "YY22",
    WideStratholmeBridgeVertical = "YY20",
    WideWoodenBridgeDiagonal1 = "LT09",
    WideWoodenBridgeDiagonal2 = "LT11",
    WideWoodenBridgeHorizontal = "LT10",
    WideWoodenBridgeVertical = "LT08",
    WinterTreeWall = "WTtw"
}
export declare class DestructableContainer extends Container<Destructable> {
    game: Readonly<{
        [key in Destructables]: Readonly<Destructable>;
    }>;
}
