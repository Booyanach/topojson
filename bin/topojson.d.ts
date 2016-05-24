import worldMap = require("maps/world-topo.json");

declare module Topojson {
    export interface Base {
        feature(json: any, collection: any): {features: any};
    }
}

declare module Maps {
    export interface All {
        world(): worldMap;
    }
}

declare var topojson: Topojson.Base;
declare var maps: Maps.All;

declare module "topojson" {
    export = topojson;
}

declare module "maps" {
    export = maps;
}