module.exports = Eris => {
  Object.defineProperty(Eris.Guild.prototype, "me", {
    get: function() {
      return this.members.get(this.guild.shard.client.user.id);
    }
  });
};
