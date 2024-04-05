// RUN EXTENSION WITH SANDBOX please 

class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'href', // change this if you make an actual extension!
      name: 'Href extension',
      blocks: [
        {
          opcode: 'relocate',
          blockType: Scratch.BlockType.COMMAND,
          text: 'relocate site to [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://turbowarp.org'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    location.href = args.ONE;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
