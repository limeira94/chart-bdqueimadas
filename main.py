import geobr

# Biomas brasileiros
biomas = geobr.read_biomes()
biomas.to_file("data/biomas_brasil.geojson", driver="GeoJSON")

# Estados brasileiros
estados = geobr.read_state()
estados.to_file("data/estados_brasil.geojson", driver="GeoJSON")
