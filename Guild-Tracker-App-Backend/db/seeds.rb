# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Member.create(
    name: 'Malganis',
    klass: 'Necromancer',
    race: 'Demon',
    level: 15,
    rank: 'B'
)

Member.create(
    name: 'Arthas',
    klass: 'Paladin',
    race: 'Human',
    level: 7,
    rank: 'C'
)

Member.create(
    name: 'Kazuma',
    klass: 'Thief',
    race: 'Human',
    level: 24,
    rank: 'A'
)

Member.create(
    name: 'Sylvanas',
    klass: 'Hunter',
    race: 'Elf',
    level: 42,
    rank: 'S'
)