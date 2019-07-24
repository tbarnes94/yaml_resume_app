import yaml
import json

yamlInputPath = "../templates/thomasbarnes.yml"
jsonOutputPath = "../templates/thomasbarnes.json"

with open(yamlInputPath, 'r') as stream:
    try:
        data = yaml.safe_load(stream)
        with open(jsonOutputPath, 'w') as outfile:
            json.dump(data, outfile, indent=2)
    except yaml.YAMLError as exc:
        print(exc)