import { IDs, Container } from '../container';
export interface Doodad extends IDs {
    name: string;
    category: string;
    tilesets: string;
    hasTilesetSpecificData: boolean;
    modelFile: string;
    loopingSound: string;
    selectionSize: number;
    defaultScale: number;
    minimumScale: number;
    maximumScale: number;
    canPlaceRandomScale: boolean;
    useClickHelper: boolean;
    ignoreModelClicks: boolean;
    maximumPitchAngleDegrees: number;
    maxRollAngleDegrees: number;
    visibilityRadius: number;
    walkable: boolean;
    variations: number;
    placeableOnCliffs: boolean;
    placeableOnWater: boolean;
    floats: boolean;
    hasAShadow: boolean;
    showInFog: boolean;
    animateInFog: boolean;
    fixedRotation: number;
    pathingTexture: string;
    minimapShow: boolean;
    minimapUseCustomColor: boolean;
    minimapColor1Red: number;
    minimapColor2Green: number;
    minimapColor3Blue: number;
    tintingColor1Red: number;
    tintingColor2Green: number;
    tintingColor3Blue: number;
    onUserSpecifiedList: boolean;
}
export declare const DoodadProps: ({
    id: "dnam";
    name: "name";
    type: "string";
    netsafe: "false";
} | {
    id: "dcat";
    name: "category";
    type: "doodadCategory";
    netsafe: "false";
} | {
    id: "dtil";
    name: "tilesets";
    type: "tilesetList";
    netsafe: "false";
} | {
    id: "dtsp";
    name: "hasTilesetSpecificData";
    type: "bool";
    netsafe: "false";
} | {
    id: "dfil";
    name: "modelFile";
    type: "model";
    netsafe: "false";
} | {
    id: "dsnd";
    name: "loopingSound";
    type: "soundLabel";
    netsafe: "false";
} | {
    id: "dsel";
    name: "selectionSize";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ddes";
    name: "defaultScale";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dmis";
    name: "minimumScale";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dmas";
    name: "maximumScale";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dcpr";
    name: "canPlaceRandomScale";
    type: "bool";
    netsafe: "false";
} | {
    id: "duch";
    name: "useClickHelper";
    type: "bool";
    netsafe: "false";
} | {
    id: "dimc";
    name: "ignoreModelClicks";
    type: "bool";
    netsafe: "false";
} | {
    id: "dmap";
    name: "maximumPitchAngleDegrees";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dmar";
    name: "maxRollAngleDegrees";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dvis";
    name: "visibilityRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dwlk";
    name: "walkable";
    type: "bool";
    netsafe: "false";
} | {
    id: "dvar";
    name: "variations";
    type: "int";
    netsafe: "false";
} | {
    id: "donc";
    name: "placeableOnCliffs";
    type: "bool";
    netsafe: "false";
} | {
    id: "donw";
    name: "placeableOnWater";
    type: "bool";
    netsafe: "false";
} | {
    id: "dflt";
    name: "floats";
    type: "bool";
    netsafe: "false";
} | {
    id: "dshd";
    name: "hasAShadow";
    type: "bool";
    netsafe: "false";
} | {
    id: "dshf";
    name: "showInFog";
    type: "bool";
    netsafe: "false";
} | {
    id: "danf";
    name: "animateInFog";
    type: "bool";
    netsafe: "false";
} | {
    id: "dfxr";
    name: "fixedRotation";
    type: "unreal";
    netsafe: "false";
} | {
    id: "dptx";
    name: "pathingTexture";
    type: "pathingTexture";
    netsafe: "false";
} | {
    id: "dsmm";
    name: "minimapShow";
    type: "bool";
    netsafe: "false";
} | {
    id: "dumc";
    name: "minimapUseCustomColor";
    type: "bool";
    netsafe: "false";
} | {
    id: "dmmr";
    name: "minimapColor1Red";
    type: "int";
    netsafe: "false";
} | {
    id: "dmmg";
    name: "minimapColor2Green";
    type: "int";
    netsafe: "false";
} | {
    id: "dmmb";
    name: "minimapColor3Blue";
    type: "int";
    netsafe: "false";
} | {
    id: "dvr1";
    name: "tintingColor1Red";
    type: "int";
    netsafe: "false";
} | {
    id: "dvg1";
    name: "tintingColor2Green";
    type: "int";
    netsafe: "false";
} | {
    id: "dvb1";
    name: "tintingColor3Blue";
    type: "int";
    netsafe: "false";
} | {
    id: "dusr";
    name: "onUserSpecifiedList";
    type: "bool";
    netsafe: "false";
})[];
export declare enum Doodads {
    AlonsusChapel = "YOsb",
    Altar = "OOal",
    AndrohalClockTower = "ACt0",
    AndrohalClockTowerDestroyed = "ACtd",
    ArcheryTarget = "LOar",
    Archway = "CSra",
    Archway1 = "NSra",
    Archway2 = "YSaw",
    Archway3 = "DSar",
    Archway4 = "GSar",
    Archway5 = "ZSas",
    Archway6 = "ZSab",
    ArchwayAngled = "CSr1",
    ArchwayAngled1 = "NSr1",
    ArchwayAngled2 = "YSa1",
    ArchwayAngled3 = "DSa1",
    ArchwayAngled4 = "GSa1",
    ArchwayAngled5 = "ZSs1",
    ArchwayAngled6 = "ZSb1",
    ArchwayAngledIcecrownStone = "ISs1",
    ArchwayAngledIcy = "ISa1",
    ArchwayAngledNatural = "ZSa1",
    ArchwayAngledOutland = "OSa1",
    ArchwayAngledStone = "DSa2",
    ArchwayAngledStone1 = "GSa2",
    ArchwayEntrance = "YSa2",
    ArchwayEntranceAngled = "YSa3",
    ArchwayIcecrownStone = "ISsr",
    ArchwayIcy = "ISar",
    ArchwayNatural = "ZSar",
    ArchwayOutland = "OSar",
    ArchwayRuined = "JSar",
    ArchwayRuined1 = "JSax",
    ArchwayStandardDimension = "ASd0",
    ArchwayStone = "DSah",
    ArchwayStone1 = "GSah",
    BannerHuman = "LOh1",
    BannerLongBlue = "YObb",
    BannerLongWhite = "YOwb",
    BannerOrc = "LOo1",
    BannerTutorialOrc = "LOo2",
    Barn = "LSba",
    BarnScorched = "LSsb",
    BarrensTreeIndestructible = "BPtw",
    Bats = "NObt",
    Bench = "DObh",
    BenchAngledStone = "YOsa",
    BenchAngledWood = "YOwa",
    BenchStone = "YObs",
    BenchWood = "YObw",
    Birds = "AObd",
    BlightedMist = "CObl",
    BlocksRuined = "ASHB",
    BlocksRuined1 = "CSbl",
    Bones = "BObo",
    Bones1 = "NObo",
    BonesRib = "LOrb",
    Bookshelf = "DObk",
    BookshelfAngled = "DOab",
    BookshelfLarge = "DOkb",
    BookshelfLong = "DObw",
    Brazier = "LObr",
    BrazierGlowing = "LObz",
    BrazierSkull = "AObr",
    BrillClockTower = "BCt0",
    BrokenColumn = "ASbc",
    BrokenColumn1 = "CSbc",
    Bubbles = "ZWbg",
    BubblesSteam = "IWbg",
    Building = "VSvb",
    BuildingA = "BA00",
    BuildingB = "BB00",
    BuildingC = "BC00",
    Bush = "APbs",
    Bush1 = "CPbs",
    Bush2 = "YPbs",
    Cactus = "BPca",
    CageEmpty = "LOce",
    CageTrashed = "LOct",
    CameraProp = "YOcp",
    Cathedral = "YSca",
    CathedralRuined = "YScr",
    Cattail = "APct",
    Cattail1 = "CPct",
    Cattail2 = "ZPru",
    CauldronWithHeads = "LOca",
    CaveCityCliffEast = "YCc4",
    CaveCityCliffNorthLeft = "YCc2",
    CaveCityCliffNorthRight = "YCc1",
    CaveCityCliffWest = "YCc3",
    CaveNaturalCliffEast = "YCr4",
    CaveNaturalCliffNorthLeft = "YCr2",
    CaveNaturalCliffNorthRight = "YCr1",
    CaveNaturalCliffWest = "YCr3",
    ChainPost = "DOcp",
    Chains = "DOch",
    Chair = "DOcr",
    Chair1 = "IOch",
    ChairIcey = "IOic",
    CityBuildingBaseRuined = "JSr6",
    CityBuildingDiagonal1Green = "YS01",
    CityBuildingDiagonal1Purple = "YS02",
    CityBuildingDiagonal1Red = "YS00",
    CityBuildingDiagonal2Blue = "YS08",
    CityBuildingDiagonal2Green = "YS07",
    CityBuildingDiagonal2Purple = "YS06",
    CityBuildingHorizontalBlue = "YS03",
    CityBuildingHorizontalGreen = "YS04",
    CityBuildingHorizontalRed = "YS05",
    CityBuildingLargeBaseRuined = "JSrc",
    CityBuildingLargeDiagonal1Red = "YS13",
    CityBuildingLargeDiagonal2Blue = "YS15",
    CityBuildingLargeHorizontalGreen = "YS14",
    CityBuildingLargeRuinedDiagonal1Red = "YSrd",
    CityBuildingLargeRuinedDiagonal2Blue = "YSrf",
    CityBuildingLargeRuinedHorizontalGreen = "YSre",
    CityBuildingLargeRuinedVerticalPurple = "YSrc",
    CityBuildingLargeVerticalPurple = "YS12",
    CityBuildingRowGroup1 = "YSbr",
    CityBuildingRowGroup2 = "YSb1",
    CityBuildingRowGroup3 = "YSb2",
    CityBuildingRuinedDiagonal1Green = "YSr1",
    CityBuildingRuinedDiagonal1Purple = "YSr2",
    CityBuildingRuinedDiagonal1Red = "YSr0",
    CityBuildingRuinedDiagonal2Blue = "YSr8",
    CityBuildingRuinedDiagonal2Green = "YSr7",
    CityBuildingRuinedDiagonal2Purple = "YSr6",
    CityBuildingRuinedHorizontalBlue = "YSr3",
    CityBuildingRuinedHorizontalGreen = "YSr4",
    CityBuildingRuinedHorizontalRed = "YSr5",
    CityBuildingRuinedVerticalBlue = "YSrb",
    CityBuildingRuinedVerticalGreen = "YSr9",
    CityBuildingRuinedVerticalRed = "YSra",
    CityBuildingVerticalBlue = "YS11",
    CityBuildingVerticalGreen = "YS09",
    CityBuildingVerticalRed = "YS10",
    CityTower = "YOmb",
    CliffCave = "LCc0",
    CliffCave2 = "LCc2",
    ColumnAngledDouble = "YSc5",
    ColumnBroken = "NObc",
    ColumnDouble = "YScd",
    ColumnRuined = "JSco",
    ColumnRuinedWithCap = "JScx",
    ColumnSemiCircle = "YScs",
    ColumnSemiCircle1 = "YSc2",
    ColumnSemiCircle2 = "YSc3",
    ColumnSemiCircle3 = "YSc4",
    ColumnSemiCircleRuined = "JScs",
    ColumnSemiCircleRuined1 = "JSc2",
    ColumnSemiCircleRuined2 = "JSc3",
    ColumnSemiCircleRuined3 = "JSc4",
    ColumnSingle = "YSco",
    Coral = "ZWcl",
    CoralArch = "ZWca",
    Corn = "LPcr",
    CorpseImpaled = "LOic",
    CorpseOfGulDan = "CGd0",
    CorpseSitting = "LOsc",
    Crater = "BRcr",
    CraterFiery = "DRfc",
    CraterFiery1 = "GRfc",
    CratesEmpty = "YOec",
    Crypt = "NSct",
    Crystal = "IRcy",
    DalaranVioletCitadelRuined = "ZOvr",
    Dust = "ZZcd",
    ElvenBuilding = "LSeb",
    EnclaveHouse = "EH00",
    EnclaveHouseB = "EHb0",
    EnclaveMainStructure = "EMs0",
    EnclaveSpire = "ES00",
    EnclaveTurret = "ET01",
    EnergyField = "YZef",
    ExteriorGate = "EG00",
    ExteriorMainTower = "EMt0",
    ExteriorTower = "ET00",
    ExteriorWall = "EW00",
    EyeOfSargeras = "ZZys",
    FarmScorched = "LSsf",
    Fence = "NOfl",
    FenceAngled = "NOal",
    FenceAngledLong = "VOal",
    FenceAngledShort = "VOas",
    FenceLong = "VOfl",
    FenceShort = "VOfs",
    Fire = "YOtf",
    FireBlue = "YOfb",
    FireGust = "YOf3",
    FirePit = "NOfp",
    FirePitTrashed = "NOft",
    FirePitWithPig = "NOfg",
    FireSmall = "YOfs",
    Fish = "AWfs",
    FishDead = "COdf",
    FishGreen = "ZWfs",
    FishSchool = "ZWsf",
    Fissure = "BRfs",
    Fissure1 = "CRfs",
    Fissure2 = "NRfs",
    FlameGrate = "OOgr",
    Flies = "LOfl",
    FloatingBox = "NWfb",
    FloatingPanel = "NWpa",
    FloatingPlank = "NWfp",
    FlowerBedAngled = "YPfa",
    FlowerBedStraight = "YPfs",
    Flowers = "ZPfw",
    FootprintsDemonic = "ZZdt",
    Fountain = "YOfn",
    FountainRuined = "YOfr",
    Geyser = "BRgs",
    Glacier = "IRgc",
    GlowingRunes = "JOgr",
    GrainScorched = "LPcw",
    Granary = "LSgr",
    GranaryScorched = "LSgs",
    Grave = "LOgr",
    GraveCityscape = "YOgr",
    GravePeasant = "LOpg",
    GraveStone = "NOgv",
    GuldansRunes = "ZZgr",
    Hay = "LOhb",
    HayCart = "LOch",
    HayCartBroken = "LOcb",
    HayCartBrokenInfected = "LOxx",
    HayCartInfected = "LOrc",
    HayClump = "LOhc",
    HayInfected = "LOrh",
    HeadOnSpear = "LOsh",
    HearthglenAbbey = "HA00",
    HighElfCrestHangingBanners = "HEch",
    HighElfCrestStandingBanners = "HEcs",
    IceBlock = "IRic",
    IceClaws = "NRic",
    IceFloating = "IWie",
    IceFloe = "NWf1",
    IceFloe1 = "NWf2",
    IceFloe2 = "NWf3",
    IceFloe3 = "NWf4",
    IceSpiderOnPedestal = "IOss",
    Iceberg = "NWi1",
    Iceberg1 = "NWi2",
    Iceberg2 = "NWi3",
    Iceberg3 = "NWi4",
    IcyWaterfall = "IWw0",
    Inn = "LSin",
    InnScorched = "LSsi",
    InvulnerabilityField = "JZif",
    IronGate = "YOig",
    IronGate1 = "YOi1",
    IronMaiden = "DOim",
    KingTerenasStatue = "YOss",
    LavaCracks = "DOlc",
    LavaCracks1 = "GOlc",
    LightningBolt = "YOlb",
    LilyPad = "CPlp",
    LilyPad1 = "LPlp",
    LilyPad2 = "ZPlp",
    LilyPads = "AWlp",
    LilyPadsFloating = "AWfl",
    LilyPadsFloating1 = "LPfp",
    LogAngled = "AOla",
    LogAngled1 = "COla",
    LogStraight = "AOlg",
    LogStraight1 = "COlg",
    MagicalLantern = "XOcl",
    MagicalRunes = "XOmr",
    MagusConservatory = "MC00",
    MagusHighrise = "MH00",
    MagusTurret = "MT00",
    MarketItemBaubles = "YOm2",
    MarketItemBaublesAlt = "YOm3",
    MarketItemProduce = "YOm4",
    MarketItemProduceAlt = "YOm5",
    MarketItemTextiles = "YOm6",
    MarketItemTextilesAlt = "YOm7",
    MarketStallLarge = "YOms",
    MarketStallSmall = "YOm1",
    MineCart = "DOmc",
    MineCartEmpty = "DOme",
    MushroomBlue = "GPsh",
    Mushrooms = "APms",
    Mushrooms1 = "CPms",
    Mushrooms2 = "ZPms",
    NightElfFishingVillage = "ASv0",
    NightElfFishingVillage1 = "ASv1",
    NightElfFishingVillage2 = "ASv2",
    NightElfFishingVillage3 = "ASv3",
    NightElfFishingVillage4 = "ASv4",
    NightElfFishingVillageRuined = "ASx0",
    NightElfFishingVillageRuined1 = "ASx1",
    NightElfFishingVillageRuined2 = "ASx2",
    Obelisk = "AOsk",
    Obelisk1 = "COob",
    Obelisk2 = "NOok",
    Obelisk3 = "YOob",
    Obelisk4 = "DOob",
    Obelisk5 = "GOob",
    Obelisk6 = "IOob",
    ObeliskBroken = "AObo",
    ObeliskBroken1 = "CObo",
    ObeliskBroken2 = "NObk",
    ObeliskGlowing = "AOob",
    Obstacle = "OOob",
    OutlandPlants = "OPop",
    PierPier = "ASpr",
    PierRuined = "ASpt",
    PileOfJunk = "DOjp",
    PileOfTreasure = "DOtp",
    Pillar = "IOpr",
    PostHitching = "LOhp",
    PostLantern = "LOlp",
    PostLantern1 = "YOlp",
    PostSign = "LOsp",
    PottedPlant = "YPpp",
    PowerGenerator = "XOcs",
    PyrewoodVillageClockTowerDestroyed = "PVct",
    RackArmor = "LOam",
    RackWeapon = "LOwp",
    RemainsScorched = "AOsr",
    RisingWater = "IZrw",
    RisingWaterWide = "IZww",
    RiverRushes = "LPrs",
    RockArchway = "ASra",
    RockArchway1 = "BSra",
    RockArchway2 = "LSra",
    RockArchwayDiagonal = "ASr1",
    RockArchwayDiagonal1 = "BSr1",
    RockArchwayDiagonal2 = "LSr1",
    RockMagma = "ORmk",
    RockPillar = "BRrp",
    RockSpires = "BRrs",
    RockSpires1 = "CRrs",
    RockSpires2 = "ZRrs",
    RockSpires3 = "ORrs",
    RockSpiresCinematic = "BRrc",
    RockSpiresSmall = "BRsp",
    RockSpiresSmall1 = "ZRsp",
    Rocks = "ARrk",
    Rocks1 = "BRrk",
    Rocks2 = "LRrk",
    Rocks3 = "NRrk",
    Rocks4 = "CRrk",
    Rocks5 = "DRrk",
    Rocks6 = "GRrk",
    Rocks7 = "IRrk",
    Rocks8 = "ZRrk",
    Rocks9 = "ORrk",
    RocksClusterFloating = "OZfc",
    RocksFloating = "ORfk",
    RocksWebbed = "NRwr",
    Rowboat = "NWrw",
    RowboatDestroyed = "NWrd",
    Rubble = "ASbr",
    Rubble1 = "CSbr",
    Rubble2 = "NSrb",
    Rubble3 = "ORrr",
    Rubble4 = "ISrb",
    RubbleLarge = "ZRbd",
    RubbleSmall = "ZRbs",
    RuinedArch = "BSar",
    RuinedChunk = "BSrc",
    RuinedCityCliffEast = "YCd2",
    RuinedCityCliffNorth = "YCd1",
    RuinedCityCliffShortEast = "YCt2",
    RuinedCityCliffShortNorth = "YCt1",
    RuinedCityCliffShortSouth = "YCt3",
    RuinedCityCliffShortWest = "YCt4",
    RuinedCityCliffSouth = "YCd3",
    RuinedCityCliffWest = "YCd4",
    RuinedCrystalTower = "ZOrc",
    RuinedCurvedWall = "BSrv",
    RuinedDoubleBase = "ZOtb",
    RuinedDoubleBase1 = "ZOt2",
    RuinedGoblinShipyard = "LSrg",
    RuinedGround2x2 = "YCx1",
    RuinedGround2x21 = "YCx2",
    RuinedGround2x22 = "YCx3",
    RuinedGround2x23 = "YCx4",
    RuinedGround4x2 = "YCx7",
    RuinedGround4x21 = "YCx8",
    RuinedGround4x4 = "YCx5",
    RuinedGround4x41 = "YCx6",
    RuinedNaturalCliffEast = "YCp2",
    RuinedNaturalCliffNorth = "YCp1",
    RuinedNaturalCliffShortEast = "YCl2",
    RuinedNaturalCliffShortNorth = "YCl1",
    RuinedNaturalCliffShortSouth = "YCl3",
    RuinedNaturalCliffShortWest = "YCl4",
    RuinedNaturalCliffSouth = "YCp3",
    RuinedNaturalCliffWest = "YCp4",
    RuinedShip = "AZrf",
    RuinedTower = "ZOdt",
    RuinedTower1 = "ZOd2",
    RuinedTowerBase = "ZOrb",
    RuinedWall = "BSrw",
    Ruins = "ZSrb",
    RuinsBloodyAltar = "ZOba",
    RuinsBrazier = "ZObz",
    RuinsBrokenStatue = "ZOsb",
    RuinsFirepot = "ZOfp",
    RuinsFountain = "ZOfo",
    RuinsLibraryShelf = "ZOls",
    RuinsObelisk = "ZOob",
    RuinsPillars = "ZOrp",
    RuinsStatue = "ZOst",
    RuinsStones = "ZOss",
    RuinsThrone = "ZOrt",
    RuinsTrash = "ZOtr",
    Runes = "KOdr",
    RuneweaverSquareFountain = "RSf0",
    Seaweed = "ZWsw",
    SewerVents = "DOsv",
    SewerWallpipes = "DOsw",
    Shells = "ZOsh",
    ShimmeringPortal = "OZsp",
    Ship = "NWsp",
    ShipDestroyed = "NWsd",
    Shrub = "ZPsh",
    SignBobsGuns = "YObg",
    SignTavern = "YOts",
    SignTraceysArmory = "YOta",
    SilvermoonArchway = "SA00",
    SilvermoonArchway45 = "SA01",
    SilvermoonArchwayEntrance = "SAe0",
    SilvermoonArchwayEntrance45 = "SAe1",
    SilvermoonBuildingsDiagonal1 = "SRbc",
    SilvermoonBuildingsDiagonal2 = "SRbe",
    SilvermoonBuildingsHorizontal = "SRbh",
    SilvermoonBuildingsVertical = "SRbv",
    SilvermoonTowerLarge = "STdl",
    SilvermoonTowerMedium = "STdm",
    SilvermoonTowerSmall = "STds",
    SilvermoonTowerXLarge = "LSt0",
    SilvermoonWall = "SWs0",
    SilvermoonWallCorner = "SWc0",
    SilvermoonWallDoor = "SWsd",
    SilvermoonWallDoorShort = "SWse",
    SilvermoonWallEndcap = "SWe0",
    SilvermoonWallLong = "SWsl",
    SilvermoonWallShort = "SWss",
    SilvermoonWall_T = "SWt0",
    Skull = "OOsk",
    SkullPile = "LOsk",
    SkullTorch = "IOst",
    SkullsOnSticks = "LOss",
    SlideCityCliffEast = "YCs2",
    SlideCityCliffNorth = "YCs1",
    SlideCityCliffShortEast = "YCo2",
    SlideCityCliffShortNorth = "YCo1",
    SlideCityCliffShortSouth = "YCo3",
    SlideCityCliffShortWest = "YCo4",
    SlideCityCliffSouth = "YCs3",
    SlideCityCliffWest = "YCs4",
    SlideNaturalCliffEast = "YCg2",
    SlideNaturalCliffNorth = "YCg1",
    SlideNaturalCliffShortEast = "YCu2",
    SlideNaturalCliffShortNorth = "YCu1",
    SlideNaturalCliffShortSouth = "YCu3",
    SlideNaturalCliffShortWest = "YCu4",
    SlideNaturalCliffSouth = "YCg3",
    SlideNaturalCliffWest = "YCg4",
    SmokeSmudge = "LOsm",
    Snowman = "IOsm",
    SnowyRock = "IRrs",
    Stake = "OOst",
    Stalagmite = "DRst",
    Stalagmite1 = "GRst",
    Standard = "OOsd",
    Statue = "YOst",
    StatueBlackCitadel = "KOst",
    StatueGuardianOfAszune = "AOgs",
    StatueIceSpider = "IOsl",
    StatueKeeper = "AOks",
    StatueOfAzshara = "DOas",
    StatueOfAzshara1 = "SA02",
    StatueShieldless = "YOks",
    StatueWhite = "YOws",
    StrahnbradClockTower = "SCt0",
    StrahnbradLargeTree = "SLt0",
    StumpHollow = "AOhs",
    StumpHollow1 = "COhs",
    SunWell = "YOsw",
    SunfurySpireMainTower = "SSmt",
    SunfurySpireSideTower = "SSst",
    SunkenRuinsTreeIndestructible = "ZPtw",
    SunreaverArchway = "SA03",
    SunreaverDome = "SD00",
    SunreaverDomeSmall = "SDs0",
    SunreaverSpire = "SS00",
    Table = "DOtb",
    TableAndChair = "DOtc",
    TableTorture = "DOtt",
    Tavern = "YSta",
    TheFrozenThrone = "IZft",
    ThrallsHut = "LZth",
    Throne = "BOth",
    Throne1 = "YOth",
    Tombstone = "NOtb",
    Torch = "LOth",
    TorchGlowing = "LOtz",
    TotemCentaur = "BOct",
    TotemLantern = "AOnt",
    TotemTauren = "BOtt",
    TowerScorched = "LSst",
    TrapFire = "YOf2",
    TrapFrost = "YOr2",
    TrapSideFire = "YOf1",
    TrapSideFrost = "YOr1",
    Trash = "LOt1",
    TreePlanter = "YPtp",
    Trough = "LOtr",
    Tulips = "ZPf0",
    UndergroundDome = "JZud",
    VinesCliffside = "ZCv1",
    VinesCliffside1 = "ZCv2",
    VinesThorny = "APtv",
    VinesThorny1 = "NPth",
    VinyPlant = "ZPvp",
    VioletHoldArchwayEndpiece = "VHae",
    VioletHoldMainStructure = "VHms",
    VioletHoldSpire = "VHs0",
    VioletHoldSpireSmall = "VHss",
    Wall90Degree = "WD00",
    WallBarredLarge = "DSp9",
    WallBarredLarge1 = "GSp9",
    WallBarredSmall = "DSp0",
    WallBarredSmall1 = "GSp0",
    WallCorner = "YSw4",
    WallCornerAlt = "YSw7",
    WallDoor = "YSwD",
    WallDoorShort = "YSwE",
    WallEndLantern = "YSll",
    WallEndLanternNoLight = "YSlx",
    WallEndShort = "YSls",
    WallEndTall = "YSlt",
    WallEndcap = "YSw5",
    WallEndcap1 = "WE00",
    WallEndcapEntrance = "YSwC",
    WallFountain = "LOwf",
    WallLowDiagonal1 = "YSw1",
    WallLowDiagonal2 = "YSw3",
    WallLowHorizontal = "YSw0",
    WallLowVertical = "YSw2",
    WallSpire = "WS01",
    WallSpireAlt = "WSa0",
    WallStone = "LOsw",
    WallStraight = "YSw6",
    WallStraight1 = "WS00",
    WallStraightLong = "YSw8",
    WallStraightLong1 = "WSl0",
    WallStraightShort = "YSw9",
    WallStraightShort1 = "WSs0",
    WallStraightTee = "YSwA",
    WallStraightTeeAlt = "YSwB",
    WallT = "WT00",
    WallTAlt = "WTa0",
    Waterfall = "LWw0",
    Well = "LSwl",
    Whale = "NWwh",
    Wheat = "LPwh",
    WheatBunch = "LPwb",
    Wheelbarrow = "LOwb",
    WheelbarrowBroken = "LOwr",
    Windmill = "LSwm",
    WindmillBurned = "LSwb",
    WorldTree = "ASwt"
}
export declare class DoodadContainer extends Container<Doodad> {
    game: Readonly<{
        [key in Doodads]: Readonly<Doodad>;
    }>;
}
