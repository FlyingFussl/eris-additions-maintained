module.exports = Eris => {
    Eris.Interaction.prototype.createEmbed = function(embed, ephemeral) {
        if (typeof ephemeral === "undefined") ephemeral = false;
        return this.createMessage({ embed: embed, flags: ephemeral ? 64 : 0 });
    };

    Eris.Interaction.prototype.createFollowEmbed = function(embed) {
        return this.createFollowup({ embed: embed });
    };
};
