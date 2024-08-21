ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-100.649609, 29.114705, -100.162398, 29.527811]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CKinneyAllWellInfo_rev10_MM_1 = new ol.format.GeoJSON();
var features_CKinneyAllWellInfo_rev10_MM_1 = format_CKinneyAllWellInfo_rev10_MM_1.readFeatures(json_CKinneyAllWellInfo_rev10_MM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CKinneyAllWellInfo_rev10_MM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CKinneyAllWellInfo_rev10_MM_1.addFeatures(features_CKinneyAllWellInfo_rev10_MM_1);
var lyr_CKinneyAllWellInfo_rev10_MM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CKinneyAllWellInfo_rev10_MM_1, 
                style: style_CKinneyAllWellInfo_rev10_MM_1,
                popuplayertitle: "",
                interactive: true,
                title: '<img src="styles/legend/CKinneyAllWellInfo_rev10_MM_1.png" /> Kinney All Well Info_rev10_MM'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_CKinneyAllWellInfo_rev10_MM_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_CKinneyAllWellInfo_rev10_MM_1];
lyr_CKinneyAllWellInfo_rev10_MM_1.set('fieldAliases', {'Row #': 'Row #', 'Stiff Diagram IDs': 'Stiff Diagram IDs', 'Location ID': 'Location ID', 'KCGCD Permit Number': 'KCGCD Permit Number', 'Lat': 'Lat', 'Long': 'Long', 'Owner': 'Owner', 'Aquifer (Edwards)': 'Aquifer (Edwards)', 'Well Depth': 'Well Depth', 'TWDB No.': 'TWDB No.', 'WQ Data (Y/N)': 'WQ Data (Y/N)', 'WQ Data': 'WQ Data', 'Na+K (mg/L)': 'Na+K (mg/L)', 'Na (mg/L)': 'Na (mg/L)', 'Ca (mg/L)': 'Ca (mg/L)', 'Mg (mg/L)': 'Mg (mg/L)', 'Cl (mg/L)': 'Cl (mg/L)', 'HCO3 (mg/L)': 'HCO3 (mg/L)', 'SO4 (mg/L)': 'SO4 (mg/L)', 'CO3 (mg/L)': 'CO3 (mg/L)', 'K': 'K', 'Na + K (meq/L)': 'Na + K (meq/L)', 'Na (meq/L)': 'Na (meq/L)', 'Ca (meqL)': 'Ca (meqL)', 'Mg (meq/L)': 'Mg (meq/L)', 'Cl (meq/L)': 'Cl (meq/L)', 'HCO3 (meq/L)': 'HCO3 (meq/L)', 'SO4 (meq/L)': 'SO4 (meq/L)', 'CO3 (meq/L)': 'CO3 (meq/L)', 'K_1': 'K_1', 'F': 'F', 'Na+K  (meq/L) / Na+K (mg/L)': 'Na+K  (meq/L) / Na+K (mg/L)', 'field_33': 'field_33', 'pH': 'pH', 'Temp C�': 'Temp C�', 'Conductivity': 'Conductivity', 'DO': 'DO', 'File Path': 'File Path', 'field_39': 'field_39', 'field_40': 'field_40', '2022 AF': '2022 AF', '2021 AF': '2021 AF', '2020 AF': '2020 AF', '2019 AF': '2019 AF', '2018 AF': '2018 AF', '2017 AF': '2017 AF', '2016 AF': '2016 AF', '2015 AF': '2015 AF', '2014 AF': '2014 AF', '2013 AF': '2013 AF', '2012 AF': '2012 AF', '2011 AF': '2011 AF', '2010 AF': '2010 AF', '2009 AF': '2009 AF', '2008 AF': '2008 AF', '2007 AF': '2007 AF', 'Existing Use': 'Existing Use', 'Historic Use': 'Historic Use', 'Use': 'Use', 'NOTES': 'NOTES', 'Pump Depth (ft)': 'Pump Depth (ft)', 'Nominal Casing Dia (in.)': 'Nominal Casing Dia (in.)', 'Aquifer per TWDB': 'Aquifer per TWDB', });
lyr_CKinneyAllWellInfo_rev10_MM_1.set('fieldImages', {'Row #': 'Hidden', 'Stiff Diagram IDs': 'TextEdit', 'Location ID': 'TextEdit', 'KCGCD Permit Number': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Owner': 'TextEdit', 'Aquifer (Edwards)': 'TextEdit', 'Well Depth': 'TextEdit', 'TWDB No.': 'TextEdit', 'WQ Data (Y/N)': 'TextEdit', 'WQ Data': 'TextEdit', 'Na+K (mg/L)': 'TextEdit', 'Na (mg/L)': 'TextEdit', 'Ca (mg/L)': 'TextEdit', 'Mg (mg/L)': 'TextEdit', 'Cl (mg/L)': 'TextEdit', 'HCO3 (mg/L)': 'TextEdit', 'SO4 (mg/L)': 'TextEdit', 'CO3 (mg/L)': 'CheckBox', 'K': 'TextEdit', 'Na + K (meq/L)': 'TextEdit', 'Na (meq/L)': 'TextEdit', 'Ca (meqL)': 'TextEdit', 'Mg (meq/L)': 'TextEdit', 'Cl (meq/L)': 'TextEdit', 'HCO3 (meq/L)': 'TextEdit', 'SO4 (meq/L)': 'TextEdit', 'CO3 (meq/L)': 'CheckBox', 'K_1': 'TextEdit', 'F': 'TextEdit', 'Na+K  (meq/L) / Na+K (mg/L)': 'TextEdit', 'field_33': 'ExternalResource', 'pH': 'TextEdit', 'Temp C�': 'TextEdit', 'Conductivity': 'TextEdit', 'DO': 'TextEdit', 'File Path': 'ExternalResource', 'field_39': 'TextEdit', 'field_40': 'TextEdit', '2022 AF': 'TextEdit', '2021 AF': 'TextEdit', '2020 AF': 'TextEdit', '2019 AF': 'TextEdit', '2018 AF': 'TextEdit', '2017 AF': 'TextEdit', '2016 AF': 'TextEdit', '2015 AF': 'TextEdit', '2014 AF': 'TextEdit', '2013 AF': 'TextEdit', '2012 AF': 'TextEdit', '2011 AF': 'TextEdit', '2010 AF': 'TextEdit', '2009 AF': 'TextEdit', '2008 AF': 'TextEdit', '2007 AF': 'TextEdit', 'Existing Use': 'TextEdit', 'Historic Use': 'TextEdit', 'Use': 'TextEdit', 'NOTES': 'TextEdit', 'Pump Depth (ft)': 'TextEdit', 'Nominal Casing Dia (in.)': 'TextEdit', 'Aquifer per TWDB': 'TextEdit', });
lyr_CKinneyAllWellInfo_rev10_MM_1.set('fieldLabels', {'Stiff Diagram IDs': 'hidden field', 'Location ID': 'hidden field', 'KCGCD Permit Number': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Owner': 'hidden field', 'Aquifer (Edwards)': 'hidden field', 'Well Depth': 'inline label - visible with data', 'TWDB No.': 'hidden field', 'WQ Data (Y/N)': 'hidden field', 'WQ Data': 'hidden field', 'Na+K (mg/L)': 'hidden field', 'Na (mg/L)': 'hidden field', 'Ca (mg/L)': 'hidden field', 'Mg (mg/L)': 'hidden field', 'Cl (mg/L)': 'hidden field', 'HCO3 (mg/L)': 'hidden field', 'SO4 (mg/L)': 'hidden field', 'CO3 (mg/L)': 'hidden field', 'K': 'hidden field', 'Na + K (meq/L)': 'hidden field', 'Na (meq/L)': 'hidden field', 'Ca (meqL)': 'hidden field', 'Mg (meq/L)': 'hidden field', 'Cl (meq/L)': 'hidden field', 'HCO3 (meq/L)': 'hidden field', 'SO4 (meq/L)': 'hidden field', 'CO3 (meq/L)': 'hidden field', 'K_1': 'hidden field', 'F': 'hidden field', 'Na+K  (meq/L) / Na+K (mg/L)': 'hidden field', 'field_33': 'hidden field', 'pH': 'hidden field', 'Temp C�': 'hidden field', 'Conductivity': 'hidden field', 'DO': 'hidden field', 'File Path': 'no label', 'field_39': 'hidden field', 'field_40': 'hidden field', '2022 AF': 'hidden field', '2021 AF': 'hidden field', '2020 AF': 'hidden field', '2019 AF': 'hidden field', '2018 AF': 'hidden field', '2017 AF': 'hidden field', '2016 AF': 'hidden field', '2015 AF': 'hidden field', '2014 AF': 'hidden field', '2013 AF': 'hidden field', '2012 AF': 'hidden field', '2011 AF': 'hidden field', '2010 AF': 'hidden field', '2009 AF': 'hidden field', '2008 AF': 'hidden field', '2007 AF': 'hidden field', 'Existing Use': 'hidden field', 'Historic Use': 'hidden field', 'Use': 'hidden field', 'NOTES': 'hidden field', 'Pump Depth (ft)': 'hidden field', 'Nominal Casing Dia (in.)': 'hidden field', 'Aquifer per TWDB': 'hidden field', });
lyr_CKinneyAllWellInfo_rev10_MM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});