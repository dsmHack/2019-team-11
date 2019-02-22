
import axios from 'axios';

async function getHucFromAddress(address) {
    var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates"
    return axios.get(url, {
        params: {
            outFields: "Loc_name,City,Place_addr,Region,RegionAbbr,Country",
            outSR: { "latestWkid": 3857, "wkid": 102100 },
            f: "json",
            SingleLine: address
        }
    })
    .then((response) => {
        if (typeof response.data.candidates[0] === 'undefined') {
            return Promise.reject("address not found")
        }
        var firstCandidate = response.data.candidates[0];
        return {
            spatialReference: response.data.spatialReference,
            x: firstCandidate.location.x,
            y: firstCandidate.location.y
        };
    })
    .then((location) => {
        return getWatershedData(location);
    })
}

async function getWatershedData(location) {
    var url = "https://inlandwaters.geoplatform.gov/arcgis/rest/services/NHDPlus/WatershedBoundaryDataset/MapServer/10/query"

    return axios.get(url, {
        params: {
            f: "json",
            outFields: "HUC12",
            spatialRel: "esriSpatialRelIntersects",
            where: "1=1",
            geometryType: "esriGeometryPoint",
            inSR: "102100",
            outSR: "102100",
            geometry: location
        }
    }).then((response) => {
        if (typeof response.data.features[0] === 'undefined') {
            return Promise.reject("watershed not found")
        }
        return response.data.features[0].attributes.HUC12;
    })
}

export default { getHucFromAddress };