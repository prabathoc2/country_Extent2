ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([75.961915, 4.255838, 87.774415, 10.863952]);
var wms_layers = [];


        var lyr_Sentinel2cloudless2021byEOX_0 = new ol.layer.Tile({
            'title': 'Sentinel-2 cloudless 2021 by EOX',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://s2maps-tiles.eu/wmts?layer=s2cloudless-2021_3857&style=default&tilematrixset=GoogleMapsCompatible&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix={z}&TileCol={x}&TileRow={y}'
            })
        });
var format_Bay_Area_1 = new ol.format.GeoJSON();
var features_Bay_Area_1 = format_Bay_Area_1.readFeatures(json_Bay_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bay_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bay_Area_1.addFeatures(features_Bay_Area_1);
var lyr_Bay_Area_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bay_Area_1, 
                style: style_Bay_Area_1,
                interactive: true,
                title: '<img src="styles/legend/Bay_Area_1.png" /> Bay_Area'
            });
var format_Idland_witout_water_2 = new ol.format.GeoJSON();
var features_Idland_witout_water_2 = format_Idland_witout_water_2.readFeatures(json_Idland_witout_water_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Idland_witout_water_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Idland_witout_water_2.addFeatures(features_Idland_witout_water_2);
var lyr_Idland_witout_water_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Idland_witout_water_2, 
                style: style_Idland_witout_water_2,
                interactive: true,
                title: '<img src="styles/legend/Idland_witout_water_2.png" /> Idland_witout_water'
            });
var format_Lagoon_Area_3 = new ol.format.GeoJSON();
var features_Lagoon_Area_3 = format_Lagoon_Area_3.readFeatures(json_Lagoon_Area_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lagoon_Area_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagoon_Area_3.addFeatures(features_Lagoon_Area_3);
var lyr_Lagoon_Area_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagoon_Area_3, 
                style: style_Lagoon_Area_3,
                interactive: true,
                title: '<img src="styles/legend/Lagoon_Area_3.png" /> Lagoon_Area'
            });
var format_line_4 = new ol.format.GeoJSON();
var features_line_4 = format_line_4.readFeatures(json_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_4.addFeatures(features_line_4);
var lyr_line_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_line_4, 
                style: style_line_4,
                interactive: true,
                title: '<img src="styles/legend/line_4.png" /> line'
            });

lyr_Sentinel2cloudless2021byEOX_0.setVisible(true);lyr_Bay_Area_1.setVisible(true);lyr_Idland_witout_water_2.setVisible(true);lyr_Lagoon_Area_3.setVisible(true);lyr_line_4.setVisible(true);
var layersList = [lyr_Sentinel2cloudless2021byEOX_0,lyr_Bay_Area_1,lyr_Idland_witout_water_2,lyr_Lagoon_Area_3,lyr_line_4];
lyr_Bay_Area_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Bay_Name': 'Bay_Name', 'Sheet_No': 'Sheet_No', 'Name': 'Name', 'Additional': 'Additional', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'R': 'R', 'Area': 'Area', 'Exent_km2': 'Exent_km2', });
lyr_Idland_witout_water_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Sheet_No': 'Sheet_No', 'Name': 'Name', 'Source': 'Source', 'Length': 'Length', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area': 'Area', 'Exent': 'Exent', });
lyr_Lagoon_Area_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HG_Nm_Hydr': 'HG_Nm_Hydr', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Sheet_No': 'Sheet_No', 'Source': 'Source', 'Source_2': 'Source_2', 'Exent_km2': 'Exent_km2', });
lyr_line_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'R': 'R', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Bay_Area_1.set('fieldImages', {'OBJECTID': '', 'Bay_Name': '', 'Sheet_No': '', 'Name': '', 'Additional': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'R': '', 'Area': '', 'Exent_km2': '', });
lyr_Idland_witout_water_2.set('fieldImages', {'OBJECTID': '', 'Sheet_No': '', 'Name': '', 'Source': '', 'Length': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Area': '', 'Exent': '', });
lyr_Lagoon_Area_3.set('fieldImages', {'OBJECTID': '', 'HG_Nm_Hydr': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Sheet_No': '', 'Source': '', 'Source_2': '', 'Exent_km2': '', });
lyr_line_4.set('fieldImages', {'OBJECTID': '', 'R': '', 'SHAPE_Leng': '', });
lyr_Bay_Area_1.set('fieldLabels', {'OBJECTID': 'inline label', 'Bay_Name': 'inline label', 'Sheet_No': 'inline label', 'Name': 'inline label', 'Additional': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', 'R': 'inline label', 'Area': 'inline label', 'Exent_km2': 'inline label', });
lyr_Idland_witout_water_2.set('fieldLabels', {'OBJECTID': 'no label', 'Sheet_No': 'no label', 'Name': 'header label', 'Source': 'no label', 'Length': 'inline label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area': 'inline label', 'Exent': 'header label', });
lyr_Lagoon_Area_3.set('fieldLabels', {'OBJECTID': 'inline label', 'HG_Nm_Hydr': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', 'Sheet_No': 'inline label', 'Source': 'inline label', 'Source_2': 'inline label', 'Exent_km2': 'inline label', });
lyr_line_4.set('fieldLabels', {'OBJECTID': 'inline label', 'R': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_line_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});