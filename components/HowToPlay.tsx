import React from 'react'

const HowToPlay = () => {
  return (
    <section className="bg-[#120d1f] text-white py-16 px-70">
      <div className='flex gap-10'>
        <div>


    <h2 className="text-3xl font-semibold text-primary mb-8">How to play?</h2>

    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <span className="text-2xl">💵</span>
        <p>All players start with <span className="font-semibold">$1500</span>.</p>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-2xl">🎲</span>
        <div>
          <p>
            <span className="font-medium">
              On your turn, roll the dice to move forward.
            </span>
          </p>
          <p className="text-sm text-secondary">Got doubles? You’ll have another turn!</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-2xl">🏢</span>
        <div>
          <p>
            Purchase valuable properties and grow your financial empire.
          </p>
          <p className="text-sm text-secondary">
            Once you own a property, other players will pay rent when they land on it.
          </p>
        </div>
      </div>
    </div>

    <hr className="my-10 border-gray-700" />

    <div className="flex mb-10">
      <div>
      <h3 className="text-xl font-medium">Own a full property set?</h3>
      <p className="text-xl font-medium mb-2">Start building houses and hotels</p>
      <p className="text-secondary text-sm">
        Players will pay you a large amount of money when they land on properties with buildings.
        Build hotels to maximize income and make other players lose their money.
      </p>
      </div>
      <div>
        <img src="howtoplay2.jpg" alt="howtoplay2" />
      </div>
    </div>

    <hr className="my-10 border-gray-700" />


    <div className="text-lg mt-10 flex items-center gap-2 font-semibold text-primary">
      <span className="text-2xl">⏩</span>
      <p>Be rich. Get richer. Do not bankrupt.</p>
    </div>
      </div>
      <div>
        <img src="howtoplay1.jpg" alt="howtoplay" />
      </div>
        </div>
  </section>
);
}

export default HowToPlay
