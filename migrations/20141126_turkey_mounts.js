/**
 * enable turkey base.
 */
db.users.update(
  {'items.pets.Turkey-Base':{$ne:null}},
  {$set:{'items.mounts.Turkey-Base':true}},
  {multi:1}
)

/**
 * Set turkey base pet-count to 5
 */
db.users.update(
  {'items.pets.Turkey-Base':null},
  {$set:{'items.pets.Turkey-Base':5}},
  {multi:1}
)