# Quantinuum - Frontend Interview Question

## Requirements
- Use React + Typescript (this repo template will help)
- Use Quantinuum UI component library
- 

## Problem Statement

A customer (non-expert) is a keen player of competitive pokemon and would like a browser based tool to assist in building a team. Initially the primary feature for the tool should be to allow searching for pokemon that are able to deal double damage to a particular pokemon.

The user should be able to search through a list of pokemon with the ability to filter by 

The web form should allow the user to select a pokemon and display that pokemon’s weaknesses, which moves can deal double damage to that pokemon and which pokemon can learn those moves.

The client has not specified where the information should come from, but there are public APIs such as PokeAPI (https://pokeapi.co/docs/v2), which can be used to obtain the necessary information. As a large amount of data may end up being queried, some attention should be given to avoiding excessive data fetching.

After delivery, the client also has some additional requirements:
Filter out legendary pokemon from the final result as they aren’t tournament legal.
Only consider moves that have over a specific base power.
Display the pokemon names in Japanese.




