{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "quantinuum-ui-dev-shell";

  buildInputs = with pkgs; [
    nodePackages.pnpm
  ];
}
