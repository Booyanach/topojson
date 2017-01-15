# TopoJSON

**TopoJSON** is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called *arcs*. This technique is similar to [Matt Bloch’s MapShaper](http://www.cartogis.org/docs/proceedings/2006/bloch_harrower.pdf
) and the [Arc/Info Export format, .e00](http://indiemaps.com/blog/2009/02/e00parser-an-actionscript-3-parser-for-the-arcinfo-export-topological-gis-format/).

Want to learn more? [See the wiki.](https://github.com/mbostock/topojson/wiki)

# Changelog

* 0.0.9

    Updated topojson to latest version.
* 0.0.8

    Un-ruin again.
* 0.0.7

    Un-ruin the project structure.
* 0.0.5

    Revert, maps should be external.
* 0.0.4

    Added definitions import for the world map.
* 0.0.3

    Added maps folder with a world map.